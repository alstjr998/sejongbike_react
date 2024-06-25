import axios from "axios";
import { useEffect, useState } from "react";
import { Container as Mapdiv, Marker, NaverMap, useNavermaps } from "react-naver-maps";

const DockMap = () => {


  const dockApiKey = import.meta.env.VITE_DOCK_API_KEY;

  const [loading, setLoading] = useState(false);

  const [dock, setDock] = useState([]);

  const navermaps = useNavermaps();

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    fetchDock();
  }, []);

  const fetchDock = async () => {
    setLoading(true);
    try{
      const response =  await axios({
        method: "get",
        url: `https://api.odcloud.kr/api/15091421/v1/uddi:8f04ee4a-dc5d-47ec-b421-f8c72d2f12ad?page=1&perPage=614&serviceKey=${dockApiKey}`,
      });

      const docks = response.data.data.map((item) => ({
        dockLat: item['경도'],
        dockLon: item['위도'],
        dockName: item['대여소 이름'],
        dockNum: item['대여소 번호'],
        dockLocation: item['주소(동)'],
      }));

      setDock(docks);

    } catch (error) {
      console.error("위치 정보를 받아오는데 실패했습니다.", error);
    }
    setLoading(false);
  };

  //상태가 업데이트 된 후 지도 렌더
  if (lat === null || lon === null) {
    return(
      <div style={{width: "95vw", height: "700px", marginTop: "15px"}}>
        Loading...
      </div>
    );
  }

  return(
    <Mapdiv style={{width: "95vw", height: "700px", marginTop: "15px"}}>
      <NaverMap defaultCenter={new navermaps.LatLng(lat, lon)} defaultZoom={17}>
        {dock.length === 0 ? (
          <p>API 조회 불가</p>
          ) : (
            <div>
              {dock.map((dockList, index) => (
                <Marker key={index} position={new navermaps.LatLng(dockList.dockLat, dockList.dockLon)} />
              ))}
            </div>
          )
        }
      </NaverMap>
    </Mapdiv>
  );
};

export default DockMap;