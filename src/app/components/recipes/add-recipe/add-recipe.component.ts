import { Component } from '@angular/core';
import { FamilyService } from 'src/app/services/family.service';
import { ItemService } from 'src/app/services/item.service';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {

  constructor(public uiNav: NavbarService, public uiFam: FamilyService, public uiLogin: LoginService, public uiItem: ItemService){}

  panelOpenState: boolean = false;

  recipeId = 0;
  recipeName = '';
  recipeImage= '';
  ingredients = [];
  weight = 0;
  measurement = '';
  quantity = 0;
  pantryId = this.uiLogin.userFamilyId;

}
