import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appNotEligibility]'
})
export class NotEligibilityDirective implements AfterViewInit {

  @Input() price!: number;
  @Input() projectType!: any
  
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
   // Hide the eligible element from DOM
    if (this.price > 0 && this.projectType != 'Locataire') {
      this.elementRef.nativeElement.style.display = 'none';
    }
 
}

}
