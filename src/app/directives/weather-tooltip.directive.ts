import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWeatherTooltip]'
})
export class WeatherTooltipDirective {
  @Input('appWeatherTooltip') tooltipText: string = '';
  tooltipElement: HTMLElement | null = null;  // Agora pode ser HTMLElement ou null

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.removeTooltip();
    }
  }

  showTooltip() {
    // Cria o elemento de tooltip
    this.tooltipElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.tooltipText);

    // Estilos do tooltip
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'backgroundColor', '#333');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'top', '100%');
    this.renderer.setStyle(this.tooltipElement, 'left', '50%');
    this.renderer.setStyle(this.tooltipElement, 'transform', 'translateX(-50%)');
    this.renderer.setStyle(this.tooltipElement, 'whiteSpace', 'nowrap');

    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  removeTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;  // Reseta para null após remover
    }
  }
}
