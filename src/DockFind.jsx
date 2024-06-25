import { NavermapsProvider } from "react-naver-maps";
import DockMap from "./components/dockfindpage/DockMap";

const DockFind = () => {
  return (
    <>
      <div id="pageTitle">
        <div>
          <p>대여소 조회</p>
        </div>
        <hr />
      </div>

      <NavermapsProvider ncpClientId="0ek87tid8s">
        <DockMap />
      </NavermapsProvider>

      <div className="content" style={{marginTop: "13px"}}>
        <div className="context" style={{margin: "0"}}>
          <div className="description">
            <p style={{fontSize: "13px"}}>
              ※ 대여소 위치 정보 API : 세종도시교통공사 공공자전거(어울링) 대여소현황 - 2022.08.30 기준 / 공공데이터포털(data.go.kr) 제공
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DockFind;
