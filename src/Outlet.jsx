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
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/eoulinginfo" element={<EoulingInfo />} />
          <Route path="/serviceinfo" element={<ServiceInfo />} />
          <Route path="/duty" element={<Duty />} />
          <Route path="/insurance" element={<Insurance />} />

          <Route path="/dockfind" element={<DockFind />} />

          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/mypage"
            element={<PrivateRoute element={<MyPage />} />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Outlet;
