import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { HttpClientModule } from '@angular/common/http';

describe('SummaryService', () => {
  let service: SummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ]
    });
    service = TestBed.inject(SummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
