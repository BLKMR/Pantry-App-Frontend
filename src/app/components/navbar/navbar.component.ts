import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { User } from 'src/app/data/User';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  constructor(public uiFamily: FamilyService, public uiUser: UserService, public uiLogin: LoginService, public uiNav: NavbarService) 
  {}

ngOnInit(): void {
  this.uiUser.userAccount;
}

ngOnDestroy(): void {
}

}
