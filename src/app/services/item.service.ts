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
   quantity = 0;
   pantryName = '';


  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }



  public addItem(
    itemId: number,
    itemName: string,
    itemImage: string,
    calories: number,
    weight: number,
    quantity: number,
    pantryFamily: string,
  ) {
    let newItem: Item ={
    id: itemId,
    name: itemName,
    image: itemImage,
    calories: calories,
    weight: weight,
    quantity: quantity,
    pantryFamily: pantryFamily,
    }
    console.log(pantryFamily)

    return this.http.addItem(newItem).pipe(take(1)).subscribe({
      next: () =>{
        this.error(`Item Added!`)
      },
      error: () => {
        console.log(newItem)
        this.error("Item already exists!")
      }});
    };






}
