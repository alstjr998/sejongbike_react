import axios from "axios";
import { useEffect, useState } from "react";

import weatherDescKo from './weatherDescKo';

const WeatherBox = () => {

  const [weather, setWeather] =useState(null);

  //날씨 API
  const API_KEY = import.meta.env.VITE_KISANG_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  const getWeather = async(lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      const weatherId = res.data.weather[0].id;
      const weatherKo = weatherDescKo[weatherId];

      //날씨 아이콘 가져오기
      const weatherIcon = res.data.weather[0].icon;
      const weatherIconAdrress = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      const cityName = res.data.name;

      const temp = Math.round(res.data.main.temp);
 
      setWeather({
        description: weatherKo,
        name: cityName,
        temp: temp,
        icon: weatherIconAdrress,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.temp}℃
      </h2>
      <h3>{weather?.description}</h3>
    </div>
  );
};

export default WeatherBox;