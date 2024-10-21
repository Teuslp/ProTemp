import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appTempColor]'
})
export class TempColorDirective implements OnChanges {

  @Input() appTempColor!: number;  // A temperatura será passada como input

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.setColor();
  }

  private setColor() {
    if (this.appTempColor > 30) {
      this.el.nativeElement.style.color = 'red';  // Temperatura alta, cor vermelha
    } else if (this.appTempColor < 15) {
      this.el.nativeElement.style.color = 'blue';  // Temperatura baixa, cor azul
    } else {
      this.el.nativeElement.style.color = 'gray';  // Temperatura moderada, cor padrão
    }
  }
}