import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cli-a',
  imports:[CommonModule,RouterModule],
  templateUrl: './cli-a.component.html',
  styleUrls: ['./cli-a.component.css']
})
export class CliAComponent {
  logos = [
    'assets/c1.png',
    'assets/c2.png',
    'assets/c3.png',
    'assets/c5.png',
    'assets/c6.png',
    'assets/c7.png',
    'assets/c8.png',
    'assets/c9.png',
    'assets/c10.png',
    'assets/c11.png',
  ];
}
