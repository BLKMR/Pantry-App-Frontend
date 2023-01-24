import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { User } from '../data/User';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userAccounts: User [] = [];
  public accountUserName = ''
  public userAccount: User = new User(0, '', '', '');
  userId = 0;
  userName = '';
  password = '';
  familyName = '';

  



  public createAccountSuccess = false;

  constructor( private http: HttpService, private snackBar: MatSnackBar) {}

  public getCreateAccountSuccess(): boolean {
    return this.createAccountSuccess;
  }

  


  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }


  public getUserAccounts(){
    this.http.getUsers().subscribe((res) => {
      this.userAccounts = res;
      console.log(this.userAccounts)
    });
  }

  public createUser(
    userId: number,
    userName: string,
    password: string,
    familyLinked: string,
  ) {
    let newUser: User ={
    id: userId,
    name: userName,
    password: password,
    familyName: familyLinked,
    }

    return this.http.addUser(newUser).pipe(take(1)).subscribe({
      next: () =>{
        this.error("User Added!")
      },
      error: () => {
        this.error("Username exists")
      }});
    };
    

    public validateUserCreation(username: string, password: string, familyName: string): void {
      if (username == '' || username == null) {
        this.error('Username Required')
        return
      }
      if (password == '' || password == null) {
        this.error('Password Required')
        return
      }
      if (familyName == '' || familyName == null) {
        this.error('Choose a Family Account or Create one prior.')
        return
      }

      this.createUser(this.userId, username, password, familyName)

    }
}
