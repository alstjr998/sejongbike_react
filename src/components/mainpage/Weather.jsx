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
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    MsUserSelect: 'none',
    UserSelect: 'none',
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
      <WeatherBox />
    </div>
  );
};

export default Weather;
