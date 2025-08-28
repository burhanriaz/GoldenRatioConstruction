import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
  selector: 'app-footer',
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  email : string ="muhammodihsan@gmail.com";
  phone : string ="(+966) 50 988 6149" ; // (+966) 58 001 5614

}
