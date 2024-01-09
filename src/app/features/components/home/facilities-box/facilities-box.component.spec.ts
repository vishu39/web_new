import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesBoxComponent } from './facilities-box.component';

describe('FacilitiesBoxComponent', () => {
  let component: FacilitiesBoxComponent;
  let fixture: ComponentFixture<FacilitiesBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilitiesBoxComponent]
    });
    fixture = TestBed.createComponent(FacilitiesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
