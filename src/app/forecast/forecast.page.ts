import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  city: string = '';
  forecastData: any = null;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Captura o parâmetro de cidade da rota
    this.route.params.subscribe(params => {
      this.city = params['city']; // 'city' é o nome do parâmetro da rota
      this.getForecastData(this.city);
    });
  }

  getForecastData(city: string) {
    this.weatherService.getForecast(city).subscribe(
      (data: any) => {
        this.forecastData = data.list;
        console.log(this.forecastData); // Verifique os dados no console
      },
      (error) => {
        console.error('Erro ao buscar dados de previsão: ', error);
      }
    );
  }
}
