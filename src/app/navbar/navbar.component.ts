import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isExpanded = false;
  expand_Toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
