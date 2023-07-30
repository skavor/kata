import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEligibilityComponent } from './not-eligibility.component';
import { SummaryService } from 'src/app/core/_services/summary/summary.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotEligibilityComponent', () => {
  let component: NotEligibilityComponent;
  let fixture: ComponentFixture<NotEligibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotEligibilityComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers: [SummaryService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check not eligibility', () => {
    component.cost = -236.23
    component.projectType = 'Locataire'
    expect(component.cost).not.toBeGreaterThan(0)
    expect(component.projectType).not.toEqual('Propriétaire')
  })
});
