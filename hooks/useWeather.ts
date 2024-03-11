export interface Weather {
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
      day: {
        avgtemp_c: number;
        condition: {
          icon: string;
        };
      };
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

export const fetchWeather = async ({
  search = "London",
  lat,
  lon,
}: {
  search?: string;
  lat?: number;
  lon?: number;
}): Promise<Weather | any> => {
  const API_KEY = process.env.NEXT_API_KEY;

  if (!API_KEY) {
    throw new Error("API key is not defined.");
  }

  const apiUrl = "https://api.weatherapi.com/v1/";

  let res: Response;
  try {
    if (lat && lon)
      res = await fetch(
        `${apiUrl}forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`
      );
    else
      res = await fetch(
        `${apiUrl}forecast.json?key=${API_KEY}&q=${search}&days=5&aqi=no&alerts=no&lat=${lat}&lon=${lon}`
      );
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
};
