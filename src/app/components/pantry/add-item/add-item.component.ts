import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{

  constructor(public uiFam: FamilyService, public uiLogin: LoginService, public uiItem: ItemService){}

  ngOnInit(): void {
    
  }
  
itemId = 0;
itemName = '';
itemImage= '';
calories = 0;
weight = 0;
quantity = 0;
pantryFamily = this.uiLogin.userFamily;

}
