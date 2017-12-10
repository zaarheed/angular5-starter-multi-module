import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[requiredLabel]'
})
export class RequiredLabelDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, "required");
  }

}
