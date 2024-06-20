import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceInfoContent from "./components/serviceinfopage/ServiceInfoContent";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceInfo = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return(
    <>
      <Header />

      <div className="responsiveMenu">
        <div id="responsiveMenuTitle">
          <p>어울링이란</p>
        </div>
        <div id="responsiveMenuDropdown" onClick={dropdownToggle}>
          <p style={{width: "80%"}}>서비스안내</p>
          <p className={dropdownVisible ? 'dropdownBtn active' : 'dropdownBtn'}>▶</p>
          <nav id="dropdownMenuList" className={dropdownVisible ? 'dropdown active' : 'dropdown'}>
            <ul>
              <li><Link to="/eoulinginfo">어울링소개</Link></li>
              <li><Link to="/serviceinfo">서비스안내</Link></li>
              <li><Link to="/duty">의무와 책임</Link></li>
              <li><Link to="/insurance">시민자전거보험</Link></li>
              <li><Link to="/app">어울링 앱 소개</Link></li>
              <li><a href="https://www.sejongbike.kr/usage/bikeUsage">자전거이용정보</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <ServiceInfoContent />
      <Footer />
    </>
  );
};

export default ServiceInfo;