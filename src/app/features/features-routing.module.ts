import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component :HomeComponent},
  {path: 'about-us', component :AboutUsComponent},
  {path: 'services', component :ServicesComponent},
  {path: 'doctors', component :DoctorsComponent},
  {path: 'hospitals', component :HospitalsComponent},
  {path: 'testimonials', component :TestimonialsComponent},
  {path: 'blogs', component :BlogsComponent},
  {path: 'contact-us', component :ContactUsComponent},
  {path: '**', component :PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
