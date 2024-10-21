import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import { WeatherTranslatePipe } from '../pipes/weather-translate.pipe';
import { WindSpeedPipe } from '../pipes/wind-speed.pipe';
import { TempColorDirective } from '../directives/temp-color.directive';

import { IonicModule } from '@ionic/angular';

import { ForecastPageRoutingModule } from './forecast-routing.module';

import { ForecastPage } from './forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForecastPageRoutingModule
  ],
  declarations: [ForecastPage, DateFormatPipe, WeatherTranslatePipe, WindSpeedPipe, TempColorDirective]
})
export class ForecastPageModule {}
