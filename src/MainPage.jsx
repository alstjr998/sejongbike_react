import './assets/index.css';
import MainPageBody from './components/mainpage/MainPageBody';
import ContentBlock from './components/mainpage/ContentBlock';

const MainPage = (props) => (
  <div>
    <MainPageBody />
    <ContentBlock backendUrl={props.backendUrl} />
  </div>
);

export default MainPage;
