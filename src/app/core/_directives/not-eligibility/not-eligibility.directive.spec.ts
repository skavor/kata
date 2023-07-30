import { NotEligibilityDirective } from './not-eligibility.directive';

describe('NotEligibilityDirective', () => {
  let elRefMock = {
    nativeElement: document.createElement('div')
  };
  it('should create an instance', () => {
    const directive = new NotEligibilityDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
