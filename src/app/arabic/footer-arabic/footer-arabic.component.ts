import { Component } from '@angular/core';
import { ArabicNumbersPipe } from '../shared/arabic-numbers.pipe';

@Component({
  selector: 'app-footer-arabic',
  standalone: true,
  imports: [ArabicNumbersPipe],
  templateUrl: './footer-arabic.component.html',
  styleUrl: './footer-arabic.component.css'
})
export class footerArabicComponent {
  email : string ="muhammodihsan@gmail.com";
  phone : string ="(+966) 50 988 6149" ; // (+966) 58 001 5614
}