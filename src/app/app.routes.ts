import { Routes } from '@angular/router';
// import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './english/about/about.component';
import { ProjectComponent } from './english/project/project.component';
import { ContactComponent } from './english/contact/contact.component';
import { ArabicComponent } from './arabic/arabic/arabic.component';
import { ProjectArabicComponent } from './arabic/project-arabic/project-arabic.component';
import { ContactArabicComponent } from './arabic/contact-arabic/contact-arabic.component';
import { HomeComponent } from './english/home/home.component';
import { ServicesComponent } from './english/services/services.component';
import { ServiceArabicComponent } from './arabic/service-arabic/service-arabic.component';
import { AboutArabicComponent } from './arabic/about-arabic/about-arabic.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'arabic', component: ArabicComponent },
  { path: 'about-arabic', component: AboutArabicComponent },
  { path: 'service-arabic', component: ServiceArabicComponent },
  { path: 'project-arabic', component: ProjectArabicComponent },
  { path: 'contact-arabic', component: ContactArabicComponent },
  //  {
  //   path: 'contact-us',
  //   loadComponent: () =>
  //     import('./arabic/contact-us/contact-us.component').then(m => m.ContactUsArabicComponent)
  // }
];
