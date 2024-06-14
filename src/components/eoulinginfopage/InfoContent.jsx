import '../../assets/eoulinginfo_css/eoulinginfo.css'

const InfoContent = () => {

  const animDelay0 = {
    animationDelay: "0ms",
  };

  return(
    <>
      <div id="pageTitle">
        <div>
          <p style={animDelay0}>어울링소개</p>
        </div>
        <hr />
      </div>
      
      <div className="content">
        <div className="infoSubTitle">
          <p>행복도시 세종, 스마트한 공영자전거</p>
        </div>
        <div className="context">
          <div className="contentSubTitle">
            <h3>행복도시의 쾌적한 도시 환경에 적합한 세종시 공영자전거</h3>
          </div>
          <div className="description">
            <p>원하는 곳에서 쉽게 대여하고 사용 후 가까운 곳에 편리하게 반납하는, 자전거를 이용한 대중교통으로, 평일엔 출‧퇴근용으로 사용하고, 야간 및 휴일에는 호수공원 등에서 레저용으로 사용 할 수 있는 창조적인 녹색교통수단입니다.</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>뉴어울링</p>
        </div>
        <div className="descBox">
          <div className="imgContainer">
            <img id="eoulingImg" src="img/new_eouling.png" alt="뉴어울링_사진" />
            <p id="newEouling">뉴어울링 자전거</p>
          </div>
          <div className="textContainer">
            <div className="contentSubTitle">
              <h3>기존 어울링의 불편사항을 개선한 공영자전거</h3>
            </div>
            <div className="description">
              <p>뉴어울링은 도로에 설치되어 있는 일반자전거 거치대를 가상의 대여소로 지정하여 일반자전거 거치대에서 대여 반납이 가능한 것이 가장 큰 특징입니다. 또한 전국 최초로 IoT 모듈을 장착하여 무인정보단말기 없이 스마트폰으로 자전거에 부착된 QR코드를 스캔하여 간편하고 편리한 이용이 가능합니다.</p>
            </div>
          </div>
        </div>
        
        <div className="descBox">
          <div className="imgContainer">
            <img id="eoulingDockerImg" src="img/new_eouling_docker.png" alt="뉴어울링_사진" />
            <p id="newEoulingDocker">거치대</p>
          </div>
          <div className="textContainer">
            <div className="contentSubTitle">
              <h3>일반 자전거 거치대를 대여소로 이용</h3>
            </div>
            <div className="description">
              <p>도로가에 설치 되어 있는 일반 자전거 거치대를 대여소로 사용하며 이용가능한 대여소는 어울링앱 메인화면에서 확인이 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default InfoContent;