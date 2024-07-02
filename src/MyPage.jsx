import axios from "axios";
import { useEffect, useState } from "react";

const MyPage = (props) => {

  const [myInfo, setMyInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);
  
  const getInfo = async () => {
    const token = localStorage.getItem("accessToken");
    
    if(token) {
      try {
        const response = await axios({
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          url: `${props.backendUrl}/mypage`,
        });

        setMyInfo(response.data);

      } catch (error) {
        console.error("조회 실패!", error);
      }
    }
  };

  return(
    <>
      <div id="pageTitle">
        <div>
          <p>내 정보</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="contextMyInfo">
          <div className="contentSubTitle">
            <h3>이름</h3>
          </div>
          <div className="description">
            <p>{myInfo.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;