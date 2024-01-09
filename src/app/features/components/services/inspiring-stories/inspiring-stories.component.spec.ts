import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiringStoriesComponent } from './inspiring-stories.component';

describe('InspiringStoriesComponent', () => {
  let component: InspiringStoriesComponent;
  let fixture: ComponentFixture<InspiringStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspiringStoriesComponent]
    });
    fixture = TestBed.createComponent(InspiringStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
