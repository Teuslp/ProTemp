import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.page.html',
  styleUrls: ['./weather-details.page.scss'],
})
export class WeatherDetailsPage implements OnInit {
  weatherData: any;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // Recebendo os dados passados pela rota
    this.route.params.subscribe(params => {
      this.weatherData = params;
    });

    this.weatherData = history.state;
    console.log(this.weatherData); // Verifique se os dados estão chegando corretamente

  }

  voltar(){
    this.location.back();
  }

}

