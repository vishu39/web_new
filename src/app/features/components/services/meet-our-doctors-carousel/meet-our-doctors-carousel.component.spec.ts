import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurDoctorsCarouselComponent } from './meet-our-doctors-carousel.component';

describe('MeetOurDoctorsCarouselComponent', () => {
  let component: MeetOurDoctorsCarouselComponent;
  let fixture: ComponentFixture<MeetOurDoctorsCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetOurDoctorsCarouselComponent]
    });
    fixture = TestBed.createComponent(MeetOurDoctorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
