import { useEffect, useState } from 'react';
import WeatherBox from './WeatherBox';

const Weather = () => {

  // 오늘의 날짜 표시
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    setToday(formattedDate);
  }, []);

  const todayStyle = {
    lineHeight: '64px',
    fontFamily: "'NanumSquareRound', sans-serif",
    fontSize: '13px',
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.46)',
  };

  //날씨 API
  const API_KEY = import.meta.env.VITE_WHEATER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  }, []);

  return (
    <div id="weather">
      <div id="text">
        <p id="title">오늘의 날씨</p>
        <p id="today" style={todayStyle}>{today}</p>
      </div>
      <div id="plusButton_weather" className="plusButton">
        <a href="https://weather.naver.com/">+더보기</a>
      </div>
      <WeatherBox />
    </div>
  );
};

export default Weather;
