import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-arabicnar',
  imports: [RouterModule],
  templateUrl: './arabicnar.component.html',
  styleUrl: './arabicnar.component.css'
})
export class ArabicnarComponent {
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
