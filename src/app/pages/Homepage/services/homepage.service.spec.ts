import { TestBed } from '@angular/core/testing';

import { HomepageService } from './homepage.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomepageService', () => {
  let service: HomepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HomepageService]
    });
    service = TestBed.inject(HomepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
