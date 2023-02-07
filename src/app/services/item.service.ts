import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Item } from '../data/Item';
import { HttpService } from './http.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public snackBar: MatSnackBar, public http: HttpService, uiUser: UserService) { }



   itemId = 0
   itemName = '';
   itemImage = '';
   calories = 0;
   weight = 0;
   measurement = '';
   quantity = 0;
   pantryId = 0;


  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }



  public addItem(
    itemId: number,
    itemName: string,
    itemImage: string,
    calories: number,
    weight: number,
    measurement: string,
    quantity: number,
    pantryId: number | undefined | null,
  ) {
    let newItem: Item ={
    id: itemId,
    name: itemName,
    image: itemImage,
    calories: calories,
    weight: weight,
    measurement: measurement,
    quantity: quantity,
    pantryId: pantryId,
    }
    console.log(pantryId)

    if (itemName === '' || itemName === null){
      this.error('Please enter an Item Name');
      return;
    }
    if (itemImage === '' || itemImage === null){
      this.error('Please enter an image URL');
      return;
    }
    if (calories === 0 || calories === null){
      this.error('Please enter a value in the Calories field');
      return;
    }
    if (weight === 0 || weight === null){
      this.error('Please enter an image URL');
      return;
    }
    if (measurement === '' || measurement === null){
      this.error('Please select a proper measurement');
      return;
    }
    if (quantity === 0 || quantity === null){
      this.error('Please enter a value greater than 0 in the quantity field');
      return;
    }

    this.http.addItem(newItem).pipe(take(1)).subscribe({
      next: () =>{
        this.error(`Item Added!`)
      },
      error: () => {
        console.log(newItem)
        this.error("Item already exists!")
      }});
    };






}
