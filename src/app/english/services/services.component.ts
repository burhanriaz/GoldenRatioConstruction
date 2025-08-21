import { CommonModule, NgFor , NgIf} from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountComponent } from "../count/count.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, CountComponent,NgFor, NgIf],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  isEngHome = false;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.urlAfterRedirects.toLowerCase();
        this.isEngHome = url === '/';
      });
  }
  services = [
    {
      title: 'Aluminum Systems',
      image: 'assets/s1.png',
      description: 'We design and install durable and sleek aluminum curtain wall systems.'
    },
    {
      title: 'Curtain Walls',
      image: 'assets/s2.png',
      description: 'Modern glass doors and windows with aluminum framing for all types of buildings.'
    },
    {
      title: 'Windows & Doors',
      image: 'assets/s3.png',
      description: 'Custom skylights for commercial and residential properties to maximize natural light.'
    },
    {
      title: 'Glass Works',
      image: 'assets/s4.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    },
    {
      title: 'Glass Works',
      image: 'assets/s5.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'cladding works',
      image: 'assets/s6.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Art glass',
      image: 'assets/s7.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Accessories',
      image: 'assets/s8.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Sky light',
      image: 'assets/s9.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Roller shutter',
      image: 'assets/s10.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Revolving doors',
      image: 'assets/s11.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Sliding doors',
      image: 'assets/s12.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Stairs & hand rails',
      image: 'assets/s13.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'partitions systems',
      image: 'assets/s14.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
    ,
    {
      title: 'Showers',
      image: 'assets/s15.png',
      description: 'We provide advanced aluminum cladding systems for exterior finishes.'
    }
  ];
}
