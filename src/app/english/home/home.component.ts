import { Component } from '@angular/core';
import { EquipmentsComponent } from '../equipments/equipments.component';
import { ProjectComponent } from '../project/project.component';
import { ClientComponent } from '../client/client.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';


@Component({
  selector: 'app-home',
  standalone : true,
   imports: [EquipmentsComponent,ServicesComponent,ProjectComponent,AboutComponent,ClientComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
