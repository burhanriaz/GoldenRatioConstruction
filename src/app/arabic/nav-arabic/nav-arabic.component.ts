import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-arabic',
  imports: [RouterModule],
  templateUrl: './nav-arabic.component.html',
  styleUrl: './nav-arabic.component.css'
})
export class NavArabicComponent {
 menuOpen: boolean = false; // State variable to control menu visibility

  constructor() { }

  /**
   * Toggles the state of the mobile menu.
   * If the menu is open, it closes it, and vice-versa.
   */
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
