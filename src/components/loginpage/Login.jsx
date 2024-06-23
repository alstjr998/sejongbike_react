import { useEffect, useState } from 'react';
import '../../assets/login_css/login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const BACK_END_URL = import.meta.env.MODE === 'development'
  ? 'http://localhost:8080'
  : 'https://port-0-spring-boot-demo-lxl86ulic4678e61.sel5.cloudtype.app';

const Login = ({ onLogin }) => {

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("accessToken", token);
      onLogin(); // Login 상태 업데이트
      navigate("/", { replace: true }); // 메인 페이지로 리디렉션
    }
  }, [location, navigate, onLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${BACK_END_URL}/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const authHeader = response.headers.get("Authorization");
        if (authHeader && authHeader.startsWith("Bearer ")) {
          const jwtToken = authHeader.replace("Bearer ", "");
          localStorage.setItem("accessToken", jwtToken);
          onLogin(); // Login 상태 업데이트
          navigate(from, { replace: true });
        } else {
          setError("Authorization 헤더가 없거나 형식이 잘못되었습니다.");
        }
      } else {
        setError("로그인 실패: 아이디나 비밀번호를 확인하세요.");
      }
    } catch (error) {
      setError("로그인 실패: 서버 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="logopart">
        <Link to="/" id="logohead">
          <img src="img/logo_1.png" alt="logo" width="110px" height="100px" />
          <div id="logotext">어울링</div>
        </Link>
      </div>

      <div id="content">
        <form className="login">
          <input
            type="text"
            id="login_Id"
            name="username"
            placeholder="아이디"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            id="login_Password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input type="checkbox" id="check_btn" />
          <label htmlFor="check_btn">
            <span>로그인 상태 유지</span>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "로그인 중..." : "로그인"}
          </button>
        </form>

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
