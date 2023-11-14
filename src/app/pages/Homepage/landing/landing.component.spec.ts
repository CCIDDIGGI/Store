import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageLandingComponent } from './landing.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

describe('HomepageLandingComponent', () => {
  let component: HomepageLandingComponent;
  let fixture: ComponentFixture<HomepageLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      declarations: [HomepageLandingComponent],
    });
    fixture = TestBed.createComponent(HomepageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
