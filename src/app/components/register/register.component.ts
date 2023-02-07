import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public uiFamily: FamilyService, public uiUser: UserService, public uiNav: NavbarService){}

  ngOnInit(): void {
    this.uiFamily.getFamilyAccounts();
    this.uiUser.getUserAccounts();
  }

  familyId = 0;
  familyName = '';
  familyUsers ?= [];
  familyRecipes ?= [];

  userId = 0;
  userName = '';
  userPassword = '';
  familyLinked ='';
  userFamilyId: number | null | undefined

  public toggleCreateUser() {
    if (this.uiNav.viewCreateUser === true) {
      this.uiNav.viewCreateUser = false;
      this.userName = '';
      this.userPassword = '';
      this.familyLinked = '';
      return;
    }
    this.uiNav.viewCreateUser = true;
  }

  public toggleCreateFamily() {
    if (this.uiNav.viewCreateFamily === true) {
      this.uiNav.viewCreateFamily = false;
      this.familyName = '';
      return;
    }
    this.uiNav.viewCreateFamily = true;
  }

  public cancelToLogin() {
      this.uiNav.viewCreateFamily = false;
      this.uiNav.viewCreateUser = false;
      this.uiNav.viewCreateAccount = false;
      this.uiNav.viewLogin = true
      this.familyName = '';
      this.userName = '';
      this.userPassword = '';
      this.familyLinked = '';
      return;
  }

}
