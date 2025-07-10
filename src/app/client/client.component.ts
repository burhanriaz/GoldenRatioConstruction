import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-client',
  standalone:true,
  imports: [RouterModule,CommonModule,FooterComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
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
