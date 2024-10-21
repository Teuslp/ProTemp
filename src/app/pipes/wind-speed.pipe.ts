import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed'
})
export class WindSpeedPipe implements PipeTransform {

  transform(value: number, unit: string = 'km/h'): string {
    if (!value) return '';
    const speed = value * 3.6;  // Converte m/s para km/h
    return `${speed.toFixed(1)} ${unit}`;  // Adiciona unidade (km/h)
  }

} 