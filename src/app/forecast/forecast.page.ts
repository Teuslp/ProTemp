import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  city: string = '';
  forecastData: any = null;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private location: Location,
    private el: ElementRef,  
    private renderer: Renderer2 
  ) {}

  ngOnInit() {
    // Captura o parâmetro de cidade da rota
    this.route.params.subscribe(params => {
      this.city = params['city']; 
      this.getForecastData(this.city);
    });
  }

  getForecastData(city: string) {
    this.weatherService.getForecast(city).subscribe(
      (data: any) => {
        this.forecastData = data.list;
        console.log(this.forecastData); 
      },
      (error) => {
        console.error('Erro ao buscar dados de previsão: ', error);
      }
    );
  }

  voltar() {
    this.location.back();
  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.renderer.setStyle(this.el.nativeElement, 'boxShadow', '0 4px 8px rgba(0,0,0,0.2)');
  }

  @HostListener('blur') onBlur() {
    this.renderer.removeStyle(this.el.nativeElement, 'boxShadow');
  }
}
