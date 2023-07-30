import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEligibitily]'
})
export class EligibitilyDirective implements AfterViewInit {

  @Input() price!: number;
  @Input() projectType!: any
  
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
      // Hide the not eligible element from DOM
      if ( this.projectType == 'Locataire' || this.price <= 0) {
        this.elementRef.nativeElement.style.display = 'none';
      }
   
  }


}
