import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import EoulingInfo from "./EoulingInfo";
import MainPage from "./MainPage";
import ServiceInfo from "./ServiceInfo";
import Login from "./components/loginpage/Login";
import DockFind from "./DockFind";
import Duty from "./Duty";
import Insurance from "./Insurance";
import MyPage from "./MyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logout from "./components/loginpage/Logout";
import Notice from "./Notice";
import NoticeDetail from "./components/noticepage/NoticeDetail";
import BikeUsage from "./BikeUsage";
import Faq from "./components/Faq";

const BACK_END_BASE_URL = import.meta.env.MODE === 'development'
? 'http://localhost:8080'
: 'https://port-0-spring-boot-demo-lxl86ulic4678e61.sel5.cloudtype.app';

const isAuthenticated = () => {
  const token = localStorage.getItem("accessToken");
  return !!token;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsAuth(authenticated);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return isAuth ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

const Outlet = () => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuth(isAuthenticated());
    };

    window.addEventListener("storage", handleAuthChange);
    return () => {
      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <>
      <Router>
        <Header isAuth={isAuth} onLogout={handleLogout}/>
        <Routes>
          <Route index element={<MainPage backendUrl={BACK_END_BASE_URL}/>} />
          <Route path="/eoulinginfo" element={<EoulingInfo />} />
          <Route path="/serviceinfo" element={<ServiceInfo />} />
          <Route path="/duty" element={<Duty />} />
          <Route path="/insurance" element={<Insurance />} />

          <Route path="/dockfind" element={<DockFind />} />

          <Route path="/notice" element={<Notice backendUrl={BACK_END_BASE_URL} />} />
          <Route path="/notice/:id" element={<NoticeDetail backendUrl={BACK_END_BASE_URL} />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bikeusage" element={<BikeUsage /> } />

          <Route path="/login" element={<Login onLogin={handleLogin} backendUrl={BACK_END_BASE_URL} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mypage" element={<PrivateRoute element={<MyPage />} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Outlet;
