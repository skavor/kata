import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityComponent } from './eligibility.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EligibilityComponent', () => {
  let component: EligibilityComponent;
  let fixture: ComponentFixture<EligibilityComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check eligibility', () => {
    component.cost = 236.23
    component.projectType = 'Propriétaire'
    expect(component.cost).toBeGreaterThan(0)
    expect(component.projectType).toEqual('Propriétaire')
  })
});
