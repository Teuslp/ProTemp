import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]'
})
export class ScrollIntoViewDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    // Quando o elemento recebe foco, rola para ele
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  @HostListener('click') onClick() {
    // Quando o elemento é clicado, rola para ele
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
