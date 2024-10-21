export interface WeatherForecast {
    city: {
      name: string;
    };
    list: Array<{
      dt_txt: string;
      main: {
        temp: number;
        humidity: number;
      };
      weather: Array<{
        description: string;
      }>;
      wind: {
        speed: number;
      };
    }>;
  }
  