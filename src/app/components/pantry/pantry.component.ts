import { Component } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent {

  constructor(public uiNav: NavbarService, public uiFam: FamilyService, public uiLogin: LoginService){}

  

  

}
