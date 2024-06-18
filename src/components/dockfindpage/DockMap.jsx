import { useEffect, useState } from "react";
import { Container as Mapdiv, Marker, NaverMap, useNavermaps } from "react-naver-maps";

const DockMap = () => {

  const navermaps = useNavermaps();

  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  //상태가 업데이트 된 후 지도 렌더
  if (lat === null || lon === null) {
    return <div>Loading...</div>;
  }
  
  return(
    <Mapdiv style={{width: "100%", height: "700px", marginTop: "15px"}}>
      <NaverMap defaultCenter={new navermaps.LatLng(lat, lon)} defaultZoom={17}>
      </NaverMap>
    </Mapdiv>
  );
};

export default DockMap;