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


  public loggedUser: User = new User(0, '', '', '', 0);
  loginSuccess = false;
  public username =  '';
  passowrd = '';
  public userId: number | undefined | null
  public userFamily: string | undefined | null;
  public userFamilyId: number | undefined | null;


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
        this.userFamily = user.familyName;
        this.userFamilyId = user.familyId
        this.loggedUser = user;
        this.uiNav.loggedIn = true;
        console.log("user found, login successful")
        console.log(user);
        console.log(this.username);
      },
      error: (err) => {
        this.error('Email/Password incorrect')
      }
    })
  }

  public getCurrentUser(userName: string){
    this.http.getUserByName(userName).pipe(take(1)).subscribe({
      next: currentUser => {
        this.loggedUser = currentUser;
        console.log('this worked' + this.loggedUser);   
      },
      error: (err) => {
        this.error('Did not get current user' + this.loggedUser);
      }
    })
  }

    public logout(): void {
      this.userId = 0;
      this.username = '';
      this.userFamily = '';
      this.userFamilyId
      this.uiNav.viewRegister = false;
      this.uiNav.viewCreateAccount = false;
      this.uiNav.viewCreateUser = false;
      this.uiNav.viewCreateFamily = false;
      this.uiNav.viewLogin = true;
      this.uiNav.viewCreateRecipe = false;
      this.uiNav.viewCreateItem = false;
      this.uiNav.viewDashboard = false;
      this.uiNav.viewPantry = false;
      this.uiNav.viewRecipes = false;
    }
    
  }



