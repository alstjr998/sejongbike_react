import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';

const NoticeDetail = (props) => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getNoticeDetail();
  }, [id]);

  const getNoticeDetail = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${props.backendUrl}/notice/${id}`,
      });

      const formattedData = {
        ...response.data,
        subTime: response.data.subTime.replace('T', ' ').replace(/\.\d{6}$/, ''),
        updateTime: response.data.updateTime.replace('T', ' ').replace(/\.\d{6}$/, '')
      };

      setNotice(formattedData);

    } catch (error) {
      setError("게시글을 불러오는 데 실패했습니다.");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!notice) {
    return <p>Loading...</p>;
  }


  const gotoList = () => {
    navigate('/notice')
  }

  return (
    <>
      <div id="pageTitle">
        <div>
          <p>공지사항</p>
        </div>
        <hr />
      </div>
      <div className="content">
        <div className="contentTable">
          <table id="noticeDetailTable">
            <tbody>
              <tr>
                <td colSpan={2}>
                  <h2>{notice.title}</h2>
                </td>
              </tr>
              <tr>
                <td style={{width: "10%", textAlign: "center"}}>작성일</td>
                <td>{notice.subTime}</td>
              </tr>
              <tr>
                <td style={{width: "10%", textAlign: "center"}}>수정일</td>
                <td>{notice.updateTime}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="context">
          <div className="description">
            <p>{ReactHtmlParser(notice.content)}</p>
          </div>
        </div>
        <hr />

        <div id="noticeFooter">
          <button id="noticeListBtn" onClick={gotoList}>목록</button>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
