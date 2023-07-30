import { EligibitilyDirective } from './eligibitily.directive';

describe('EligibitilyDirective', () => {
  let elRefMock = {
    nativeElement: document.createElement('div')
  };
  
  
  it('should create an instance', () => {
    const directive = new EligibitilyDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
