import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Family} from '../data/Family';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../data/User';
import { Item } from '../data/Item';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient,  public snackBar: MatSnackBar) { }



  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }



  addFamily(newFamily: Family) {
    return this.http.post<Family>("https://localhost:7160/api/Families", newFamily)
  }
    

  addUser(newUser: User) {
    return this.http.post<User>("https://localhost:7160/api/Users", newUser)

  }

  joinFamily(id: number, updatedUser: User) {
    return this.http.put<User>(`https://localhost:7160/api/Users/${id}`, {...updatedUser})
  }

  addItem(newItem: Item) {
    return this.http.post<Item>("https://localhost:7160/api/Items", newItem)
  }

  /*getItems(){
    return this.http.get<Item[]>(`https://localhost:7160/api/Items/${pantryId}`);
  }
  */

  login(username: string, password: string) {
    return this.http.get<User>(`https://localhost:7160/api/Users/${username}/${password}`)
  }


  getFamilies(){
    return this.http.get<Family[]>("https://localhost:7160/api/Families")
  }

  getUsers(){
    return this.http.get<User[]>("https://localhost:7160/api/Users")
  }

  getUserByName(userName: string){
    return this.http.get<User>(`https://localhost:7160/api/Users/${userName}`)
  }



}
