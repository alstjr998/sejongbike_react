import axios from "axios";
import { useEffect, useState } from "react";
import '../../assets/noice_css/notice.css';
import { Link } from "react-router-dom";

const NoticeContent = (props) => {

  const [noticeList, setNoticeList] = useState([]);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getNotice();
    getRole();
  }, []);

  const getNotice = async () => {
    try{
      const response = await axios({
        method: "GET",
        url: `${props.backendUrl}/notice`,
      });

      const formattedData = response.data.map(notice => ({
        ...notice,
        subTime: notice.subTime.replace('T', ' ').replace(/\.\d{6}$/, ''),
        updateTime: notice.updateTime.replace('T', ' ').replace(/\.\d{6}$/, '')
      }));

      setNoticeList(formattedData);

    } catch (error) {
      setError("공지사항을 불러오는 데 실패했습니다.");
      console.log("에러");
    }
  };

  const getRole = async () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try{
        const response = await axios({
          method: "GET",
          url: `${props.backendUrl}/mypage`,
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        setRole(response.data.role);

      } catch (error) {
        setError("권한을 불러오는 데 실패했습니다.");
        console.log("권한 에러");
      }
    }
  };
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(noticeList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = noticeList.slice().reverse().slice(indexOfFirstItem, indexOfLastItem);


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
          <table id="noticeTable">
            <thead>
              <tr>
                <th style={{width: "10%"}}>번호</th>
                <th style={{width: "60%"}}>제목</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((notice, index) => (
                <tr key={index}>
                  <td>{notice.id}</td>
                  <td>
                    <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
                  </td>
                  <td>{notice.subTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {role === "ADMIN" ? (
            <div className="postBtnContainer">
              <Link to="/noticepost">
                <button className="postBtn">
                  <p>작성</p>
                </button>
              </Link>
            </div>
          ) : (
            <div />
          )}
          <div className="pageBtn">
            {Array.from({ length: totalPages }, (_, index) => (
              <button className="noticeNumBtn"
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                <p>{index + 1}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeContent;
