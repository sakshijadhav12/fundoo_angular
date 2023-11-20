import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent 

  implements
 
  OnInit{
   
    opened: boolean = false; // Declare the 'opened' property
  events: string[] = []; // Declare the 'events' property

  constructor() { }

  ngOnInit(): void { }

  toggleSidenav() {
    this.opened = !this.opened;
  }
}

