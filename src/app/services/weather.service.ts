import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherForecast } from '../models/weather-forecast.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = '4778482758e631551f8e4f8b5004c23d'; // Coloque sua chave da API aqui
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherData> {
    const url = `${this.weatherApiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherData>(url);  // Use o tipo WeatherData aqui
  }

  getForecast(city: string): Observable<WeatherForecast> {
    const url = `${this.forecastApiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get<WeatherForecast>(url);
    console.log(`Fetching forecast from URL: ${url}`);
  } 

}