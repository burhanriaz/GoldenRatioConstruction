import { Component } from '@angular/core';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ProjectComponent } from '../project/project.component';
import { ClientComponent } from '../client/client.component';
import { ServicesComponent } from '../services/services.component';


@Component({
  selector: 'app-home',
  standalone : true,
   imports: [EquipmentsComponent,ServicesComponent,ProjectComponent,ClientComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
