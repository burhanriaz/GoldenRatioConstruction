import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { ArbaicComponent } from './arbaic/arbaic.component';
import { ArabicNavbarComponent } from './arabic-navbar/arabic-navbar.component';
import { SerComponent } from './ser/ser.component';
import { PrComponent } from './pr/pr.component';
import { ArabicServiceComponent } from './arabic-service/arabic-service.component';
import { ArComponent } from './ar/ar.component';
import { AcComponent } from './ac/ac.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ser', component: SerComponent },
  { path: 'pr', component: PrComponent },
   { path: 'project', component: ProjectComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'arabic', component: ArbaicComponent },
   {path:'About',component:ArabicNavbarComponent},
   {path:'',component:ArabicNavbarComponent},
   {path:'as',component:ArabicServiceComponent},
   {path:'ap',component:ArComponent},
   {path:'ac',component:AcComponent}
];
