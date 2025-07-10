import { Component } from '@angular/core';
import { ArabicnarComponent } from '../arabicnar/arabicnar.component';
import { ArabicHomeComponent } from '../arabic-home/arabic-home.component';
import { EquiAComponent } from '../equi-a/equi-a.component';
import { ServAComponent } from '../serv-a/serv-a.component';
import { ProAComponent } from '../pro-a/pro-a.component';
import { CliAComponent } from '../cli-a/cli-a.component';
import { FooAComponent } from '../foo-a/foo-a.component';

@Component({
  selector: 'app-arbaic',
  imports: [ArabicnarComponent,ArabicHomeComponent,EquiAComponent,ServAComponent,ProAComponent,CliAComponent,FooAComponent],
  templateUrl: './arbaic.component.html',
  styleUrl: './arbaic.component.css'
})
export class ArbaicComponent {

}
