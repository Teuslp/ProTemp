import { Component } from '@angular/core';
import { WeatherService } from '../../app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (this.city) {
      this.weatherService.getWeatherByCity(this.city).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData); // Apenas para testar o retorno da API
      });
    }
  }
}