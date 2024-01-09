import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentArticlesComponent } from './recent-articles.component';

describe('RecentArticlesComponent', () => {
  let component: RecentArticlesComponent;
  let fixture: ComponentFixture<RecentArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentArticlesComponent]
    });
    fixture = TestBed.createComponent(RecentArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
