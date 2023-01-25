import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, take } from 'rxjs';
import { Family } from '../data/Family';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {



  public familyAccounts: Family [] = [];
  
  public accountFamilyName = ''
  public familyAccount = new BehaviorSubject<Family>(new Family(0, '', '',));
  familyId = 0;
  familyName = '';
  familyPantry = '';
  familyRecipes = [];

  constructor(private http: HttpService, private snackBar: MatSnackBar) { }



  public error(message: string): void {
    this.snackBar.open(message, undefined, { duration: 1500 });
  }

  public getFamilyAccounts(){
    this.http.getFamilies().subscribe((res) => {
      this.familyAccounts = res;
      console.log(this.familyAccounts)
    });
  }

  public getPantryByName(familyName: string): void {
    this.http.getFamilyByFamilyName(familyName)
    .pipe(take(1))
    .subscribe({
      next: (fam) =>
      {
      console.log(this.familyAccount)
      },
      error: (err) => {
        if (err.status === 404){
          console.log("wtf")
        }
      }});
  }



    public createFamily(
      familyId: number,
      familyName: string,
      familyPantry: string,
    ) {
      let newFamily: Family ={
      id: familyId,
      name: familyName,
      pantry: familyPantry,
      }
      console.log("success")
      
      return this.http.addFamily(newFamily).subscribe({
        next: (fam) => {
          this.error(`Family ${fam.name} has been created!`)
          this.getFamilyAccounts()
        },
        error: (err) => {
            if (err.status === 500){
              this.error("Family Name exists.");
            }
          }
        });
      }


  public validateFamilyCreation(name: string, pantry: string): void {
    if (name == '' || name == null) {
      this.error('Family name required')
      return
    }
    if (pantry == '' || pantry == null) {
      this.error('Pantry name required')
      return
    }
    this.familyName = name;
    this.familyPantry = pantry;
    this.createFamily(this.familyId, this.familyName, this.familyPantry)

  }
}
    