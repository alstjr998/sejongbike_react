import axios from "axios";
import { useEffect, useState } from "react";

const NoticeContent = (props) => {

  const [noticeList, setNoticeList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNotice();
  }, []);

  const getNotice = async () => {
    try{
      const response = await axios({
        method: "GET",
        url: `${props.backendUrl}/notice`,
      });

      const formattedData = response.data.map(notice => ({
        ...notice,
        subTime: notice.subTime.replace('T', ' '),
        updateTime: notice.updateTime.replace('T', ' ')
      }));

      setNoticeList(formattedData);

    } catch (error) {
      setError("공지사항을 불러오는 데 실패했습니다.")
    }
  };

  return (
    <>
      <div id="pageTitle">
        <div>
          <p>공지사항</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="contentTable" style={{marginBottom: "5px"}}>
          <table id="insuranceTable">
            <thead>
              <tr>
                <th style={{width: "10%"}}>번호</th>
                <th style={{width: "60%"}}>제목</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {noticeList.slice().reverse().map((notice, index) => (
                <tr key={index}>
                  <td>{notice.id}</td>
                  <td>{notice.title}</td>
                  <td>{notice.subTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NoticeContent;
