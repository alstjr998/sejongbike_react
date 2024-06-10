import './assets/index.css';
import Header from './components/Header';
import MainPageBody from './components/mainpage/MainPageBody';
import ContentBlock from './components/mainpage/ContentBlock';
import Footer from './components/Footer';

const Home = () => (
  <div>
    <Header />
    <MainPageBody />
    <ContentBlock />
    <Footer />
  </div>
);

export default Home;
