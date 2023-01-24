import { Component } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'michael-blackmer-pantry-collab-2';

  constructor(public uiNav: NavbarService) { }
  
}
