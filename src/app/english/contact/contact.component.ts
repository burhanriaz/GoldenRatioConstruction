import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountComponent } from '../count/count.component';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [CommonModule, RouterModule, CountComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

   phone : string ="(+966) 50 988 6149" ; // (+966) 58 001 5614
  email : string ="muhammodihsan@gmail.com";
}


