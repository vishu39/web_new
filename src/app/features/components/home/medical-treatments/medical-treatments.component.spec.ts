import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTreatmentsComponent } from './medical-treatments.component';

describe('MedicalTreatmentsComponent', () => {
  let component: MedicalTreatmentsComponent;
  let fixture: ComponentFixture<MedicalTreatmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalTreatmentsComponent]
    });
    fixture = TestBed.createComponent(MedicalTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
