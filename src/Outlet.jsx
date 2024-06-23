import EoulingInfo from "./EoulingInfo";
import MainPage from "./MainPage";
import ServiceInfo from "./ServiceInfo";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/loginpage/Login";
import DockFind from "./DockFind";
import Duty from "./Duty";
import Insurance from "./Insurance";

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

  return(
    <Router>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/eoulinginfo" element={<EoulingInfo />} />
        <Route path="/serviceinfo" element={<ServiceInfo />} />
        <Route path="/duty" element={<Duty />} />
        <Route path="/insurance" element={<Insurance />} />
        
        <Route path="/login" element={<Login onLogin={handleLogin}/>} />
        
        <Route path="/dockfind" element={<DockFind />} />
      </Routes>
    </Router>
  );
};

export default Outlet;