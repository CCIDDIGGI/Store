import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLandingComponent } from './landing.component';

describe('HomepageLandingComponent', () => {
  let component: HomepageLandingComponent;
  let fixture: ComponentFixture<HomepageLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageLandingComponent]
    });
    fixture = TestBed.createComponent(HomepageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
