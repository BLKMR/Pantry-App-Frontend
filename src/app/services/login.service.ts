import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from './http.service';
import { take } from 'rxjs';
import { User } from '../data/User';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService, public snackBar: MatSnackBar, public uiNav: NavbarService) { }


  loggedUser: User = new User(0, '', '', '');
  loginSuccess = false;
  username =  '';
  passowrd = '';
  userId: number | undefined | null
  userFamily = '';


  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }
  

  public ValidateLogin(username: string, password: string): void {
    if (username == '' || username == null) {
      this.error('Enter Username');
      return
    }
    if (password == '' || password == null) {
      this.error('Enter Password')
      return
    }
    this.SubmitLogin(username, password)
  }

  public SubmitLogin(username: string, password: string){
    this.http.login(username, password).pipe(take(1)).subscribe({
      next: user => {
        this.userId = user.id;
        this.username = user.name;   
        this.userFamily = user.familyName
        this.uiNav.loggedIn = true;
        console.log("user found, login successful")
        console.log(user)
      },
      error: (err) => {
        this.error('Email/Password incorrect')
      }
    })
  }

    public logout(): void {
      this.userId = 0;
      this.username = '';
      this.userFamily = '';
    }
    
  }



