import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule,NavbarComponent],
  templateUrl: './Project.component.html',
  styleUrls: ['./Project.component.css']
})
export class ProjectComponent {
  Project = [
    {
      title: 'Al Rajhi Bank',
      image: 'assets/p1.png',
      description: 'All aluminum works for exterior and interior facades and doors'
    },
    {
      title: 'Aljazira Bank',
      image: 'assets/p2.png',
      description: 'All aluminum works for facades, doors and windows'
    },
    {
      title: 'Alinma Bank',
      image: 'assets/p3.png',
      description: 'All exterior works, doors and windows Aluminum and glass works in various areas of the building'
    },
    {
      title: 'Banque Saudi Fransi',
      image: 'assets/p4.png',
      description: 'All external destinations work. Aluminum and glass works for doors, windows and partitions'
    },
    {
      title: 'Ministry of National Guard',
      image: 'assets/p5.png',
      description: 'All external facade works for buildings All cladding works'
    }
    ,
    {
      title: 'Ministry of Eduction',
      image: 'assets/p6.png',
      description: `All doors, windows and stairs works
External interfaces
Glass works`
    }
    ,
    {
      title: 'ASCOTT',
      image: 'assets/p7.png',
      description: 'Aluminum works for facades, doors and windows'
    }
    ,
    {
      title: 'Al Baraha ',
      image: 'assets/s8.png',
      description: `used in interior & exterior works for doors, windoes used fir safety and privacy`
    }
    ,
    {
      title: 'Alimma Bank',
      image: 'assets/p12.png',
      description: ' provide advanced aluminum cladding systems for exterior finishes.'
    },
  ];
}
