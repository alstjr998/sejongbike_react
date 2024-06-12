import { useEffect, useState } from 'react';

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

  const getWeather = async(lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
 
      // id 찾아서 매칭 후 description 한글 번역된 거 가져오기
      const weatherId = res.data.weather[0].id;
      const weatherKo = weatherDescKo[weatherId];
      // 날씨 아이콘 가져오기
      const weatherIcon = res.data.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      // 소수점 버리기
      const temp = Math.round(res.data.main.temp);
 
      setWeather({
        description: weatherKo,
        name: cityName,
        temp: temp,
        icon: weatherIconAdrs,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="weather">
      <div id="text">
        <p id="title">오늘의 날씨</p>
        <p id="today" style={todayStyle}>{today}</p>
      </div>
      <div id="plusButton_weather" className="plusButton">
        <a href="https://weather.naver.com/">+더보기</a>
      </div>
      <a href="https://weather.naver.com/" target="_blank" rel="noopener noreferrer">
        <img src="/img/weather.png" alt="Weather" />
      </a>
    </div>
  );
};

export default Weather;
