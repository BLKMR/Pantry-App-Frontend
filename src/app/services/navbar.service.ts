import { Injectable } from '@angular/core';
import { FamilyService } from './family.service';
import { LoginService } from './login.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  public loggedIn = false;


  public viewRegister = false;
  public viewCreateAccount = false;
  public viewCreateUser = false;
  public viewCreateFamily = false;
  public viewLogin = true;
  public viewCreateRecipe = false;
  public viewCreateItem = false;
  public viewDashboard = false;
  public viewPantry = false;
  public viewRecipes = false;
  public createUserSuccess = false;
  public createFamilySuccess = false;
  public createRecipeSuccess = false;
  public createItemSuccess = false;



  public showCreateAccount() {
    this.viewCreateAccount = true;
  }


  public showCreateUser() {
    this.viewCreateUser = true;
  }


  public showCreateFamily() {
    this.viewCreateFamily = true;
  }

  public showDashboard() {
    this.viewRegister = false;
    this.viewCreateAccount = false;
    this.viewCreateUser = false;
    this.viewCreateFamily = false;
    this.viewCreateRecipe = false;
    this.viewCreateItem = false;
    this.viewDashboard = true;
    this.viewPantry = false;
    this.viewRecipes = false;
    this.createUserSuccess = false;
    this.createFamilySuccess = false;
    this.createRecipeSuccess = false;
    this.createItemSuccess = false;
  }


  public showCreateItem() {
    if(this.loggedIn === false){
      this.viewCreateItem = false;
    }
    this.viewCreateItem = true;
    this.viewPantry = false;
  }

  public showCreateRecipe() {
    if(this.loggedIn === false){
      this.viewCreateRecipe = false;
    }
    this.viewCreateRecipe = false;
  }

  public showViewRecipes() {
    if(this.loggedIn === false){
      this.viewRecipes = false;
    }
    this.viewRecipes = true;
  }

  public showViewPantry() {
    if(this.loggedIn === false){
      this.viewPantry = false;
    }
    this.viewPantry = true;
    
  }

  public showViewLogin() {
    this.viewLogin = true;
  }

  public showViewCreateUser() {
    this.viewCreateUser = true;
  }

  public showViewCreateFamily() {
    this.viewCreateFamily = true;
  }

  public showCreatedAccountSuccess() {
    this.createUserSuccess = true;
  }

  public showCreatedRecipeSuccess() {
    this.createRecipeSuccess = true;
  }

  public showCreatedFamilySuccess() {
    this.createFamilySuccess = true;
  }




}
