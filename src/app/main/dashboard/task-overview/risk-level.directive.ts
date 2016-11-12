import { IvService } from '../../../iv.service';
import { AfterViewInit, Directive, DoCheck, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appRiskLevel]'
})
export class RiskLevelDirective implements AfterViewInit, DoCheck {

  @Input() tag: string;

  elementRef: ElementRef;
  renderer: Renderer;
  ivService: IvService;

  constructor(el: ElementRef, renderer: Renderer, serv: IvService) {
    this.elementRef = el;
    this.renderer = renderer;
    this.ivService = serv;
  }

  ngAfterViewInit() {

    if (this.ivService.getProcessedFoS() > 0.15) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'red');
    }

    // if (this.tag.toLowerCase() === 'cleaning') {
    //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'red');
    // } else if (this.tag.toLowerCase() === 'cargo') {
    //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'orange');
    // } else {
    //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
    // }
  }

  ngDoCheck() {
    this.ivService.log(this.ivService.getProcessedFoS());

    if (this.ivService.getProcessedFoS() <= 0.11) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'green');
    } else if (this.ivService.getProcessedFoS() > 0.12) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', 'red');
    }
  }

}
