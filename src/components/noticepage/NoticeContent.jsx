import axios from "axios";
import { useEffect, useState } from "react";
import '../../assets/noice_css/notice.css';
import { Link } from "react-router-dom";

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
