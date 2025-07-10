import { Component } from '@angular/core';
import { EquipmentsComponent } from "../equipments/equipments.component";
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ProjectComponent } from '../project/project.component';
import { ClientComponent } from '../client/client.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CountComponent } from '../count/count.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone : true,
   imports: [EquipmentsComponent,ServicesComponent,ProjectComponent,ClientComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
