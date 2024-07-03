import '../../assets/appinfo_css/appinfo.css';

const AppInfoContent = () => {
  return(
    <>
      <div id="pageTitle">
        <div>
          <p>어울링 앱 설치</p>
        </div>
        <hr />
      </div>

      <div className="content" style={{display: "flex", justifyContent: "space-around"}}>
        <div id="appText">
          <h1>어울링<br />공영자전거</h1>
          <p>어울링 앱을 이용하시면 세종시 공영자전거 어울링을 더욱 편리하고 스마트하게 이용하실 수 있습니다.</p>
          <div id="appBadge">
            <a href="https://apps.apple.com/kr/app/%EC%96%B4%EC%9A%B8%EB%A7%81-%EA%B3%B5%EC%98%81%EC%9E%90%EC%A0%84%EA%B1%B0/id1408417032">
              <img src="/img/badge_ios.png" alt="ios 다운로드" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=kr.sejongbike.bike">
              <img src="/img/badge_android.png" alt="android 다운로드" />
            </a>
          </div>
        </div>
        <img id="iconImg" src="/img/icon_eouling.png" alt="어울링 앱 아이콘" />
      </div>


    </>
  );
};

export default AppInfoContent;