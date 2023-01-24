import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public uiNav: NavbarService,public uiLogin: LoginService,public uiUser: UserService) {}

  username = '';
  password = '';

}
