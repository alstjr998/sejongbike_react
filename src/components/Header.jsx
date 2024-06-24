import { Link } from 'react-router-dom';
import '../assets/header.css';
import '../assets/header_responsive.css'
import Menu from './Menu';

const Header = (props) => {
  return(
    <header>
      <div id="leftBlank"></div>
      <div id="logo">
        <Link to="/">
          <img src="/img/logo.png" alt="logo" />
          <p>어울링</p>
        </Link>
      </div>
      <Menu isAuth={props.isAuth} onLogout={props.onLogout} />
    </header>
  );
};

export default Header;
