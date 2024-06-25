import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logout from "./loginpage/Logout";

const Menu = (props) => {

  const [isActive, setIsActive] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 초기 체크
    if (window.innerWidth <= 1000) {
      setIsActive(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 1000) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [windowWidth]);

  return (
    <>
      <div id="menuButton" onClick={props.menuToggle}>
        <a href="#" className="toggleButton">
          <img src="/img/menuButton.png" alt="menu button" />
        </a>
      </div>
      <nav id="nav" className={props.menuVisible || isActive ? "menu active" : "menu"}>
        <ul>
          <li id="li_menu1">
            <div className="textBox">
              <Link to="/eoulinginfo" onClick={props.menuToggle}>어울링이란</Link>
            </div>
            <ul id="ul_menu1">
              <li>
                <Link to="/eoulinginfo">어울링소개</Link>
              </li>
              <li>
                <Link to="/serviceinfo">서비스안내</Link>
              </li>
              <li>
                <Link to="/duty">의무와 책임</Link>
              </li>
              <li>
                <Link to="/insurance">시민자전거보험</Link>
              </li>
              <li>
                <Link to="/app">어울링 앱 소개</Link>
              </li>
              <li>
                <a href="https://www.sejongbike.kr/usage/bikeUsage">
                  자전거이용정보
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="textBox">
              <Link to="/dockfind" onClick={props.menuToggle}>대여소 조회</Link>
            </div>
          </li>
          <li id="li_menu2">
            <div className="textBox">
              <a href="https://www.sejongbike.kr/customer/notice" onClick={props.menuToggle}>고객센터</a>
            </div>
            <ul id="ul_menu2">
              <li>
                <a href="https://www.sejongbike.kr/customer/notice">공지사항</a>
              </li>
              <li>
                <a href="https://www.sejongbike.kr/customer/faq">
                  자주하는질문
                </a>
              </li>
            </ul>
          </li>
          {props.isAuth ? (
            <li id="logout">
              <div className="textBox">
                <Logout onLogout={props.onLogout}  onClick={props.menuToggle}/>
              </div>
            </li>
          ) : (
            <li id="login">
              <div className="textBox">
                <Link to="/login" onClick={props.menuToggle}>로그인</Link>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
