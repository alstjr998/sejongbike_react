import axios from "axios";
import { useEffect, useState } from "react";

import weatherDescKo from './weatherDescKo';

const WeatherBox = () => {

  const [weather, setWeather] = useState(null);

  const [weatherIconAddress, setWeatherIconAddress] = useState("");

  //날씨 API
  const API_KEY = import.meta.env.VITE_OPENWHEATER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  const getWeather = async(lat, lon) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      });

      const weatherId = response.data.weather[0].id;
      const weatherKo = weatherDescKo[weatherId];

      //날씨 아이콘 가져오기
      const weatherIcon = response.data.weather[0].icon;
      setWeatherIconAddress(`/img/${weatherIcon}.svg`);

      const cityName = response.data.name;

      const temp = Math.round(response.data.main.temp);
 
      setWeather({
        description: weatherKo,
        name: cityName,
        temp: temp,
        icon: weatherIconAddress,
      });

    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className="weatherBox">
      <div id="icon">
        <img src={weatherIconAddress} alt="날씨 아이콘" />
      </div>
      <div className="tempDesc">
        <p id="tempText">{weather?.temp}℃</p>
        <p id="descText">{weather?.description}</p>
      </div>
      <div id="apiText">
        <p>※날씨 API 제공 : OpenWeatherMap</p>
      </div>
    </div>
  );
};

export default WeatherBox;