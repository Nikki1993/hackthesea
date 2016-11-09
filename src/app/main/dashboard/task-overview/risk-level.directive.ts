import { AfterViewInit, Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appRiskLevel]'
})
export class RiskLevelDirective implements AfterViewInit {

  @Input() risk: string;

  elementRef: ElementRef;
  renderer: Renderer;

  constructor(el: ElementRef, renderer: Renderer) {
    this.elementRef = el;
    this.renderer = renderer;
  }

  ngAfterViewInit() {
    if (this.risk.toLowerCase() === 'high') {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'red');
    } else if (this.risk.toLowerCase() === 'medium') {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'orange');
    } else {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
    }
  }

}
