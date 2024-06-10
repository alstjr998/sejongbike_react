import Footer from "../Footer";
import Header from "../Header";

const EoulingInfo = () => {

  return(
    <>
      <Header />
        <div className="content">
          <div id="pageTitle">
            <h1>어울링소개</h1>
          </div>
          <hr />
          <div className="infoSubTitle">
            <h2>행복도시 세종, 스마트한 공영자전거</h2>
          </div>
          <div className="contentSubTitle">
            <h3>행복도시의 쾌적한 도시 환경에 적합한 세종시 공영자전거</h3>
            <p> 원하는 곳에서 쉽게 대여하고 사용 후 가까운 곳에 편리하게 반납하는, 자전거를 이용한 대중교통으로, 평일엔 출‧퇴근용으로 사용하고, 야간 및 휴일에는 호수공원 등에서 레저용으로 사용 할 수 있는 창조적인 녹색교통수단입니다.</p>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default EoulingInfo;