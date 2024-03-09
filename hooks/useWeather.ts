const API_KEY = process.env.REACT_APP_API_KEY;

interface Weather {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    wind_mph: number;
    wind_degree: number;
    pressure_mb: number;
    humidity: number;
    feelslike_c: number;
  };
  forecast: {
    forecastday: {
      date: string;
      astro: {
        sunrise: string;
        sunset: string;
      };
      hour: {
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      }[];
    }[];
  };
}

export const fetchWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=1&aqi=no&alerts=no`
  );
  return (await res.json()) as Weather;
};
