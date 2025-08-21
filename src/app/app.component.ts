import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './english/navbar/navbar.component';
import { FooterComponent } from "./english/footer/footer.component";
import { NavArabicComponent } from './arabic/nav-arabic/nav-arabic.component';
import { footerArabicComponent } from './arabic/footer-arabic/footer-arabic.component';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf,RouterOutlet,FooterComponent,NavbarComponent,NavArabicComponent,footerArabicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,

})
export class AppComponent {
  title = 'Golden Ratio Construction ';
   isArabic = false;

 constructor(private router: Router) {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects.toLowerCase();
      this.isArabic = url.includes('arabic');
    });
}

}