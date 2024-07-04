import { useEffect, useState } from 'react';
import '../../assets/mainpage_css/contentblock.css';
import '../../assets/mainpage_css/contentblock_responsive.css';
import Weather from './Weather';
import { Link } from 'react-router-dom';
import axiosWithOutAuth from '../../util/axiosWithoutAuth';

const ContentBlock = (props) => {
  const [noticeList, setNoticeList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getNotice();
  }, []);

  const getNotice = async () => {
    try{
      const response = await axiosWithOutAuth(`${props.backendUrl}/notice`);

      setNoticeList(response.data);

    } catch (error) {
      setError("공지사항을 불러오는 데 실패했습니다.")
    }
  };

  const mainPageNotice = noticeList.slice().reverse().slice(0, 5);

  return (
    <div className="contentBlock">
      <div id="board">
        <input type="radio" name="board" id="notice" defaultChecked />
        <label htmlFor="notice" id="noticeLabel">공지사항</label>
        <input type="radio" name="board" id="question" />
        <label htmlFor="question" id="questionLabel">자주하는질문</label>
        <div id="plusButton_notice" className="plusButton">
          <Link to="/notice">+더보기</Link>
        </div>
        <div id="plusButton_question" className="plusButton">
          <Link to="/faq">+더보기</Link>
        </div>
        <div id="noticetab" className="tabContent">
          <ul>
            {mainPageNotice.map(notice => (
              <li key={notice.id}>
                <Link to={`/notice/${notice.id}`}>{notice.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="questiontab" className="tabContent">
          <ul>
            <li><Link to="/faq">기본 대여시간 초과 시 추가요금은 얼마인가요?</Link></li>
            <li><Link to="/faq">어울링 자전거 이용 비용은 얼마인가요?</Link></li>
            <li><Link to="/faq">대여소는 무엇이며 어디에 있나요?</Link></li>
            <li><Link to="/faq">어울링 자전거란 무엇인가요?</Link></li>
            <li><Link to="/faq">자전거를 대여한 곳에만 반납해야 하나요?</Link></li>
          </ul>
        </div>
      </div>
      <div id="gap"></div>
      <Weather />
    </div>
  );
};

export default ContentBlock;
