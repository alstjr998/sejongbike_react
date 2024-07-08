import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../../assets/notice_css/noticedetail.css';
import ReactHtmlParser from 'react-html-parser';
import axiosWithOutAuth from "../../util/axiosWithoutAuth";
import axiosWithAuth from "../../util/axiosWithAuth";

const NoticeDetail = (props) => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getNoticeDetail();
    getRole();
  }, [id]);

  const getNoticeDetail = async () => {
    try {
      const response = await axiosWithOutAuth(`${props.backendUrl}/notice/${id}`);

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

  const getRole = async () => { 
    let token = localStorage.getItem("accessToken");
    if (!token) {
      return;
    } else {
      try{
        const response = await axiosWithAuth(`${props.backendUrl}/mypage`);

        setRole(response.data.role);

      } catch (error) {
        setError("권한을 불러오는 데 실패했습니다.");
        console.log("권한 에러");
      }
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

        {role === "ADMIN" ? (
          <div className="detailBtnContainer">
            <Link to="/noticeupdate">
              <button className="postBtn">
                <p>수정</p>
              </button>
            </Link>
            <button className="postBtn">
              <p>삭제</p>
            </button>
          </div>
        ) : (
          <div />
        )}

        <div id="noticeFooter">
          <button id="noticeListBtn" onClick={gotoList}>목록</button>
        </div>
      </div>
    </>
  );
};

export default NoticeDetail;
