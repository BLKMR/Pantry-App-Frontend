import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, take } from 'rxjs';
import { Family } from '../data/Family';
import { User } from '../data/User';
import { HttpService } from './http.service';
import { LoginService } from './login.service';
import { NavbarService } from './navbar.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {



  public familyAccounts: Family [] = [];
  
  public accountFamilyName = ''
  public familyAccount = new BehaviorSubject<Family>(new Family(0, ''));
  familyId = 0;
 
  familyName = '';
  familyRecipes = [];
  familyRegistered = false;
  currentUser = this.uiLogin.loggedUser;

  constructor(private http: HttpService, private snackBar: MatSnackBar, private uiLogin: LoginService, private uiNav: NavbarService) { }



  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }

  public getFamilyAccounts(){
    this.http.getFamilies().subscribe((res) => {
      this.familyAccounts = res;
      console.log(this.familyAccounts)
    });
  }


  public joinFamily(id: number, userToAdd: User, familyName: string){    
    userToAdd.familyName = familyName;
    console.log(userToAdd);
    console.log(this.uiLogin.loggedUser);
    this.http.joinFamily(id, userToAdd).pipe(take(1)).subscribe({
      next: (joined) => {
        this.error(`${userToAdd.name} has been added to Family ${familyName}!`)
        this.uiNav.viewCreateFamily = false;
        console.log("User added to Family!");
      },
      error: (err) => {
        this.error('Something went wrong');
      }

    })

  }



    public createFamily(
      familyId: number,
      familyName: string,
    ) {
      let newFamily: Family ={
      id: familyId,
      name: familyName,
      }
      
      return this.http.addFamily(newFamily).subscribe({
        next: (fam) => {
          console.log(fam);   
          this.getFamilyAccounts();
          this.uiNav.viewJoinOrCreateFamily = false;
          this.familyRegistered = true;

        },
        error: (err) => {
            if (err.status === 500){
              this.error(`Family name ${familyName} exists!`);
            }
          }
        });
      }




  public validateFamilyCreation(name: string): void {
    if (name == '' || name == null) {
      this.error('Family name required')
      return
    }
    this.familyName = name;
    this.createFamily(this.familyId, this.familyName)

  }
}
    