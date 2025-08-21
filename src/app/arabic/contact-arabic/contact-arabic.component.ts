import { Component } from '@angular/core';
import { ArabicCounterComponent } from '../arabic-counter/arabic-counter.component';
import { ArabicNumbersPipe } from '../shared/arabic-numbers.pipe';

@Component({
  selector: 'app-contact-arabic',
  standalone: true,
  imports: [ArabicNumbersPipe,ArabicCounterComponent],
  templateUrl: './contact-arabic.component.html',
  styleUrls: ['./contact-arabic.component.css'] 
})
export class ContactArabicComponent {
  phone: string = "(+966) 50 988 6149";
  email: string = "muhammodihsan@gmail.com";
}
