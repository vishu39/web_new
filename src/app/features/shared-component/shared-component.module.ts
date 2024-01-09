import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AboutComponent } from './components/about/about.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';


@NgModule({
  declarations: [
    AboutComponent,
    WhyChooseUsComponent,
    SuccessStoriesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    AboutComponent,
    WhyChooseUsComponent,
    SuccessStoriesComponent
  ]
})
export class SharedComponentModule { }
