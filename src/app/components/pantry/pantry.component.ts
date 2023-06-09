import { Component } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.css']
})
export class PantryComponent {

  constructor(public uiNav: NavbarService, public uiFam: FamilyService, public uiLogin: LoginService, public uiItem: ItemService){}

  panelOpenState: boolean = false;

  itemId = 0;
  itemName = '';
  itemImage= '';
  calories = 0;
  weight = 0;
  measurement = '';
  quantity = 0;
  pantryId = this.uiLogin.userFamilyId;

  measurements = ["grams", "ounces", "lbs"]

  clearItemFields(): void {
    this.itemId = 0;
    this.itemName = '';
    this.itemImage= '';
    this.calories = 0;
    this.weight = 0;
    this.measurement = '';
    this.quantity = 0;
    this.panelOpenState = false;


  }



}
