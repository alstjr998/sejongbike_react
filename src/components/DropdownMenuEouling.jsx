import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenuEouling = (props) => {

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
        <nav id="dropdownEouling" className={dropdownVisible ? 'dropdown active' : 'dropdown'}>
          <ul>
            <li><Link to="/eoulinginfo">어울링소개</Link></li>
            <li><Link to="/serviceinfo">서비스안내</Link></li>
            <li><Link to="/duty">의무와 책임</Link></li>
            <li><Link to="/insurance">시민자전거보험</Link></li>
            <li><Link to="/appinfo">어울링 앱 설치</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DropdownMenuEouling;