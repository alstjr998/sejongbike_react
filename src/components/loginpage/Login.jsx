import '../../assets/login_css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="logopart">
        <Link to="/" id="logohead">
          <img src="img/logo_1.png" alt="logo" width="110px" height="100px" />
          <div id="logotext">어울링</div>
        </Link>
      </div>

      <div id="content">
        <div className="login">
          <ul>
            <li>
              <input type="text" id="login_Id" placeholder="아이디" />
            </li>
          </ul>
          <ul>
            <li>
              <input type="password" id="login_Password" placeholder="비밀번호" />
            </li>
          </ul>
          <ul>
            <li>
              <input type="checkbox" id="check_btn" />
              <label htmlFor="check_btn">
                <span>로그인 상태유지</span>
              </label>
            </li>
          </ul>
          <button type="submit" onClick={() => window.location.href='/'}>로그인</button>
        </div>

        <div className="infojoinbox">
          <div id="User_Info">
            <div id="left">
              <div className="subContainer">
                <a href="User_id" id="User_id">아이디찾기</a>
              </div>
              <div className="subContainer">
                <a href="User_password" id="User_password">비밀번호찾기</a>
              </div>
            </div>
            <div id="right">
              <a href="User_join" id="User_join">회원가입</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bodybottom">
        <div id="anotherlogin">
          <div className="line">
            <div className="small"></div>
          </div>
          <div id="anotherLoginText">
            <p>다른 방법으로 로그인하기</p>
          </div>
          <div className="line">
            <div className="small"></div>
          </div>
        </div>
        <div id="snslogin">
          <div id="snsbox">
            <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Flogins.daum.net%2Faccounts%2Fksso.do%3Frescue%3Dtrue%26url%3Dhttps%253A%252F%252Fwww.daum.net#login">
              <img src="img/kakao 100.png" alt="kakao" />
            </a>
            <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/">
              <img src="img/naver 100.png" alt="naver" />
            </a>
            <a href="https://www.facebook.com/login/">
              <img src="img/facebook 100.png" alt="facebook" />
            </a>
            <a href="https://appleid.apple.com/sign-in">
              <img src="img/apple 100.png" alt="apple" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
