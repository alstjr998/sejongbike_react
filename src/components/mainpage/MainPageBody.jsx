import Carousel from './Carousel';
import Buttons from './Buttons';
import '../../assets/mainpage_css/mainpagebody.css';
import '../../assets/mainpage_css/mainpagebody_responsive.css';

const MainPageBody = () => (
  <div className="main">
    <Carousel />
    <Buttons />
  </div>
);

export default MainPageBody;
