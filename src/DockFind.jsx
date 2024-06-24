import { NavermapsProvider } from "react-naver-maps";
import DockMap from "./components/dockfindpage/DockMap";

const DockFind = () => {
  return(
    <>
      <NavermapsProvider ncpClientId="0ek87tid8s">
        <DockMap />
      </NavermapsProvider>
    </>
  );
};

export default DockFind;