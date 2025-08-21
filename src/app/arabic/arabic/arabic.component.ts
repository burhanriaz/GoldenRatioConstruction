import { Component } from '@angular/core';
import { ArabicHomeComponent } from '../arabic-home/arabic-home.component';
import { EquipmensArabicComponent } from '../equipmens-arabic/equipmens-arabic.component';
import { ClientArabicComponent } from '../client-arabic/client-arabic.component';
import { ProjectArabicComponent } from '../project-arabic/project-arabic.component';
import { ServiceArabicComponent } from '../service-arabic/service-arabic.component';

@Component({
  selector: 'app-arabic',
  imports: [ArabicHomeComponent,EquipmensArabicComponent,ServiceArabicComponent,ProjectArabicComponent,ClientArabicComponent],
  templateUrl: './arabic.component.html',
  styleUrl: './arabic.component.css'
})
export class ArabicComponent {

}
