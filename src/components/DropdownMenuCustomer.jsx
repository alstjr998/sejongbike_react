import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenuCustomer = (props) => {

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return(
    <div className="responsiveMenu">
      <div id="responsiveMenuTitle">
        <p>어울링이란</p>
      </div>
      <div id="responsiveMenuDropdown" onClick={dropdownToggle}>
        <p style={{width: "80%"}}>{props.pageName}</p>
        <p className={dropdownVisible ? 'dropdownBtn active' : 'dropdownBtn'}>▶</p>
        <nav id="dropdownCustomer" className={dropdownVisible ? 'dropdown active' : 'dropdown'}>
          <ul>
            <li><Link to="/notice">공지사항</Link></li>
            <li><Link to="/faq">자주하는질문</Link></li>
            <li><Link to="/bikeusage">자전거이용정보</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenuCustomer;