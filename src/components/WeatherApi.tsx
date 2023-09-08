//openweathermap.org

//Build an app that tells you the weather by city name: https://www.youtube.com/watch?v=MIYQR-Ybrn4&t=809s

import { useEffect } from "react";

const apiKey = "ff17874d3026b019e563925d00aba430";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany";

const WeatherApi = () => {
  async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const result = await response.json();
    console.log(result);
  }

  useEffect(() => {
    checkWeather();
  }, []);

  return <div>Weather API Component</div>;
};

export default WeatherApi;
