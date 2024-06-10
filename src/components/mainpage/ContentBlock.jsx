import '../../assets/mainpage_css/contentblock.css';
import '../../assets/mainpage_css/contentblock_responsive.css';
import Weather from './Weather';

const ContentBlock = () => {
  return (
    <div className="contentBlock">
      <div id="board">
        <input type="radio" name="board" id="notice" defaultChecked />
        <label htmlFor="notice" id="noticeLabel">공지사항</label>
        <input type="radio" name="board" id="question" />
        <label htmlFor="question" id="questionLabel">자주하는질문</label>
        <div id="plusButton_notice" className="plusButton">
          <a href="https://www.sejongbike.kr/customer/notice">+더보기</a>
        </div>
        <div id="plusButton_question" className="plusButton">
          <a href="https://www.sejongbike.kr/customer/faq">+더보기</a>
        </div>
        <div id="noticetab" className="tabContent">
          <ul>
            <li><a href="https://www.sejongbike.kr/customer/notice/130">미납(초과)요금 납부 안내(전체 공지)</a></li>
            <li><a href="https://www.sejongbike.kr/customer/notice/135">미납요금 미납부시 어울링 이용불가</a></li>
            <li><a href="https://www.sejongbike.kr/customer/notice/134">[어울링 서비스 재개 안내]</a></li>
            <li><a href="https://www.sejongbike.kr/customer/notice/133">커피쿠폰 증정 명단</a></li>
            <li><a href="https://www.sejongbike.kr/customer/notice/132">태풍에 따른 운영중단</a></li>
          </ul>
        </div>
        <div id="questiontab" className="tabContent">
          <ul>
            <li><a href="">기본 대여시간 초과 시 추가요금은?</a></li>
            <li><a href="">어울링 자전거 이용 비용은?</a></li>
            <li><a href="">대여소는 무엇이며 어디에 있나요?</a></li>
            <li><a href="">어울링 자전거란 무엇인가요?</a></li>
            <li><a href="">어울링 초과요금은 어떻게 되나요? 휴대폰 소액결제를 차단해도 되나요?</a></li>
          </ul>
        </div>
      </div>
      <div id="gap"></div>
      <Weather />
    </div>
  );
};

export default ContentBlock;
