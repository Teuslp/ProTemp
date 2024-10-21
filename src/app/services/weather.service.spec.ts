import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch weather data by city', () => {
    const mockWeatherData = {
      name: 'São Paulo',
      main: { temp: 25 },
      weather: [{ description: 'Clear sky' }],
    };

    service.getWeatherByCity('São Paulo').subscribe((data) => {
      expect(data.name).toBe('São Paulo');
      expect(data.main.temp).toBe(25);
      expect(data.weather[0].description).toBe('Clear sky');
    });

    const req = httpMock.expectOne(
      `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=SUA_API_KEY&units=metric`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });
});
