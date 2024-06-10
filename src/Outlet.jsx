import EoulingInfo from "./components/eoulinginfopage/EoulingInfo";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/loginpage/Login";

const Outlet = () => {
  return(
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/eoulinginfo" element={<EoulingInfo />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </ Router>
  );
};

export default Outlet;