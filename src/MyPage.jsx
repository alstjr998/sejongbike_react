import axios from "axios";
import { useEffect, useState } from "react";
import './assets/mypage_css/mypage.css';

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

        const formattedData = {
          ...response.data,
          ticketExpireDate: response.data.ticketExpireDate.replace('T', ' ').replace(/\.\d{6}$/, '')
        };

        setMyInfo(formattedData);

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
        <div className="context">
          <div className="contextMyInfo">
            <div className="contentSubTitle">
              <h3>▶이름</h3>
            </div>
            <div className="description">
              <p>{myInfo.name}</p>
            </div>
          </div>
          <div className="contextMyInfo">
            <div className="contentSubTitle">
              <h3>▶이메일</h3>
            </div>
            <div className="description">
              <p>{myInfo.email}</p>
            </div>
          </div>
          <div className="contextMyInfo">
            <div className="contentSubTitle">
              <h3>▶핸드폰 번호</h3>
            </div>
            <div className="description">
              <p>{myInfo.phoneNum}</p>
            </div>
          </div>
          <div className="contextMyInfo">
            <div className="contentSubTitle">
              <h3>▶주소</h3>
            </div>
            <div className="description">
              <p>{myInfo.address}</p>
            </div>
          </div>
          <div className="contextMyInfo">
            <div className="contentSubTitle">
              <h3>▶이용권 만료일</h3>
            </div>
            <div className="description">
              <p>{myInfo.ticketExpireDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;