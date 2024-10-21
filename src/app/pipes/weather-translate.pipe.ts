import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherTranslate'
})
export class WeatherTranslatePipe implements PipeTransform {
  transform(value: string): string {
    const translations: { [key: string]: string } = {
      'clear sky': 'Céu Limpo',
      'few clouds': 'Poucas Nuvens',
      'scattered clouds': 'Nuvens Dispersas',
      'broken clouds': 'Nuvens Quebradas',
      'shower rain': 'Chuva Leve',
      'rain': 'Chuva',
      'thunderstorm': 'Tempestade',
      'snow': 'Neve',
      'mist': 'Névoa',
      'light rain': 'Chuva Fraca',
      'overcast clouds': 'Nuvens Nubladas',
      // adicione mais traduções conforme necessário
    };
    return translations[value.toLowerCase()] || value;
  }
}