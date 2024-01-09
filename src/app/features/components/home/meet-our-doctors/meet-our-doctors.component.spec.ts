import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurDoctorsComponent } from './meet-our-doctors.component';

describe('MeetOurDoctorsComponent', () => {
  let component: MeetOurDoctorsComponent;
  let fixture: ComponentFixture<MeetOurDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetOurDoctorsComponent]
    });
    fixture = TestBed.createComponent(MeetOurDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
