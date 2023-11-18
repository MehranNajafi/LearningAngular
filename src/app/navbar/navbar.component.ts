import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  is_expanded = false;
  expand_Toggle() {
    this.is_expanded = !this.is_expanded;
  }
}
