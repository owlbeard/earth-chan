import axios from 'axios';

const key = process.env.WEATHER_API_KEY;

type FetchWeatherProps = {
  city: string;
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      icon: string;
      temp: string;
      feels: string;
      humidity: string;
      wind: string;
    }>
  >;
  setCondition: React.Dispatch<React.SetStateAction<string>>;
};

export const fetchWeather = async ({
  city,
  setData,
  setCondition,
}: FetchWeatherProps) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=7d64c2ec5b734e8a82462725232204&q=${city}`
    );
    const weatherData = response.data;
    const condition = weatherData.current.condition.text;
    const item = {
      name: '',
      icon: '',
      temp: '',
      feels: '',
      humidity: '',
      wind: '',
    };
    item.name = weatherData.location.name;

    item.temp = `${weatherData.current.temp_c}° ${condition}`;
    item.icon = weatherData.current.condition.icon;
    item.feels = `Feels: ${weatherData.current.feelslike_c}°`;
    item.humidity = `Humidity: ${weatherData.current.humidity}`;
    item.wind = `Wind: ${weatherData.current.wind_kph} km/h`;
    setData(item);
    setCondition(condition);
  } catch (err) {
    alert(err);
  }
};
