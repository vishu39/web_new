import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  active: string = '';
  navMenus = [
    { url: 'home', text: 'Home', active: true },
    { url: 'about-us', text: 'About' },
    { url: 'services', text: 'Services' },
    { url: 'doctors', text: 'Doctors' },
    { url: 'hospitals', text: 'Hospitals' },
    { url: 'testimonials', text: 'Testimonials' },
    { url: 'blogs', text: 'Blogs' },
    { url: 'contact-us', text: 'Contact Us' },
  ];
  setActive(title: string) {
    console.log(title);
    this.active = title;
  }
}
