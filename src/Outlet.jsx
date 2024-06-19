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

const Outlet = () => {
  return(
    <Router>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/eoulinginfo" element={<EoulingInfo />} />
        <Route path="/serviceinfo" element={<ServiceInfo />} />
        <Route path="/duty" element={<Duty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dockfind" element={<DockFind />} />
        
      </Routes>
    </Router>
  );
};

export default Outlet;