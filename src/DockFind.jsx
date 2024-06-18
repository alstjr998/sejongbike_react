import { NavermapsProvider } from "react-naver-maps";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DockMap from "./components/dockfindpage/DockMap";

const DockFind = () => {
  return(
    <>
      <Header />
        <NavermapsProvider ncpClientId="0ek87tid8s">
          <DockMap />
        </NavermapsProvider>
      <Footer />
    </>
  );
};

export default DockFind;