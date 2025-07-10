import { Component } from '@angular/core';
import { ArabicnarComponent } from '../arabicnar/arabicnar.component';
import { FooAComponent } from '../foo-a/foo-a.component';
import { ArabicCounterComponent } from '../arabic-counter/arabic-counter.component';

@Component({
  selector: 'app-ac',
  imports: [ArabicnarComponent,FooAComponent,ArabicCounterComponent],
  templateUrl: './ac.component.html',
  styleUrl: './ac.component.css'
})
export class AcComponent {

}
