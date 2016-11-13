import { IvService } from '../../../iv.service';
import { Directive, DoCheck, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appRiskLevel]'
})
export class RiskLevelDirective implements DoCheck {

  @Input() tag: string;

  elementRef: ElementRef;
  renderer: Renderer;
  ivService: IvService;

  constructor(el: ElementRef, renderer: Renderer, serv: IvService) {
    this.elementRef = el;
    this.renderer = renderer;
    this.ivService = serv;
  }

  ngDoCheck() {
    this.ivService.log(this.ivService.getProcessedFoS());

    if (this.ivService.getProcessedFoS() <= 0.10) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#8BC34A');
    } else if (this.ivService.getProcessedFoS() >= 0.11 && this.ivService.getProcessedFoS() <= 0.49) {
      if (this.tag.toLowerCase() === 'low' || this.tag.toLowerCase() === 'medium' ) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#8BC34A');
      } else {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#FFC107');
      }
    } else if (this.ivService.getProcessedFoS() >= 0.50 && this.ivService.getProcessedFoS() <= 0.80) {
      if (this.tag.toLowerCase() === 'low' || this.tag.toLowerCase() === 'medium' ) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#FFC107');
      } else {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#F57C00');
      }
    } else {
      if (this.tag.toLowerCase() === 'low') {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#F57C00');
      } else {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', '#F44336');
      }
    }
  }

}
