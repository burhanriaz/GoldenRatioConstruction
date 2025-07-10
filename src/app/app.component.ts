import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { MainComponent } from './main/main.component';
import { CountComponent } from './count/count.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,

})
export class AppComponent {
  title = 'burhan';
}
