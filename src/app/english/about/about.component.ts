import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-about',                // ✅ correct selector
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf, CountComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']  // ✅ plural
})
export class AboutComponent {
  isEngHome = false;

  constructor(private router: Router) {
    // set on initial load
    this.isEngHome = (this.router.url || '').toLowerCase() === '/';

    // update on navigation
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isEngHome = e.urlAfterRedirects.toLowerCase() === '/';
      });
  }
}
