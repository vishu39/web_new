import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { Card3Component } from './components/home/card-3/card-3.component';
import { AboutComponent } from './components/home/about/about.component';
import { MedicalTreatmentsComponent } from './components/home/medical-treatments/medical-treatments.component';
import { FacilitiesBoxComponent } from './components/home/facilities-box/facilities-box.component';
import { MeetOurDoctorsComponent } from './components/home/meet-our-doctors/meet-our-doctors.component';
import { WhyChooseUsComponent } from './components/home/why-choose-us/why-choose-us.component';
import { SuccessStoriesComponent } from './components/home/success-stories/success-stories.component';
import { GetInTouchComponent } from './components/home/get-in-touch/get-in-touch.component';
import { RecentArticlesComponent } from './components/home/recent-articles/recent-articles.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TitleBreadcrumbsComponent } from './components/about-us/title-breadcrumbs/title-breadcrumbs.component';
import { ServicesComponent } from './components/services/services.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailsComponent } from './components/blogs/blog-details/blog-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedComponentModule } from './shared-component/shared-component.module';
import { ImageCarouselComponent } from './components/services/image-carousel/image-carousel.component';
import { MeetOurDoctorsCarouselComponent } from './components/services/meet-our-doctors-carousel/meet-our-doctors-carousel.component';
import { InspiringStoriesComponent } from './components/services/inspiring-stories/inspiring-stories.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';





//  console.warn("features module")
@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    Card3Component,
    AboutComponent,
    MedicalTreatmentsComponent,
    FacilitiesBoxComponent,
    MeetOurDoctorsComponent,
    WhyChooseUsComponent,
    SuccessStoriesComponent,
    GetInTouchComponent,
    RecentArticlesComponent,
    AboutUsComponent,
    TitleBreadcrumbsComponent,
    ServicesComponent,
    DoctorsComponent,
    HospitalsComponent,
    TestimonialsComponent,
    BlogsComponent,
    BlogDetailsComponent,
    ContactUsComponent,
    ImageCarouselComponent,
    MeetOurDoctorsCarouselComponent,
    InspiringStoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    FeaturesRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class FeaturesModule { }
