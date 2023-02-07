import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/data/User';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public uiFamily: FamilyService, public uiUser: UserService, public uiFam: FamilyService, public uiNav: NavbarService, public uiLogin: LoginService){}

  ngOnInit(): void {
    this.uiFamily.getFamilyAccounts();
    this.currentUser = Object.assign(this.uiLogin.loggedUser)
    console.log(this.currentUser.id, this.currentUser.userName, + " is current user");
    if (this.currentUser.familyId === 0 || this.currentUser.familyId === null) {
      this.uiNav.viewCreateFamily = true;
      return;
    }

  }

  currentUser: any;
  familyId = 0;
  familyName = '';
  familyUsers ?= [];
  familyRecipes ?= [];
  joinFamilySuccess = false;
  

  public toggleCreateFamily() {
    if (this.uiNav.viewJoinOrCreateFamily === true) {
      this.uiNav.viewJoinOrCreateFamily = false;
      this.familyName = '';
      return;
    }
    this.uiNav.viewJoinOrCreateFamily = true;
  }

  



}
