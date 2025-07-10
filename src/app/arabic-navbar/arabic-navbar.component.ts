import { Component } from '@angular/core';
import { ArabicnarComponent } from '../arabicnar/arabicnar.component';
import { ArabicCounterComponent } from '../arabic-counter/arabic-counter.component';
import { FooAComponent } from '../foo-a/foo-a.component';

@Component({
  selector: 'app-arabic-navbar',
  imports: [ArabicnarComponent,ArabicCounterComponent,FooAComponent],
  templateUrl: './arabic-navbar.component.html',
  styleUrl: './arabic-navbar.component.css'
})
export class ArabicNavbarComponent {

}
