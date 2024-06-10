import '../assets/footer.css';
import '../assets/footer_responsive.css'

const Footer = () => {
  return (
    <footer>
      <div id="sctc_logo">
        <a href="https://www.sctc.kr/index/">
          <img src="/img/sctc_logo.png" alt="SCTC 로고" />
        </a>
      </div>
      <div id="address">
        <p>세종특별자치시 조치원읍 군청로 93 조치원청사 A동</p>
        <p>사업자등록번호: 133-82-04414 , 대표자 도순구</p>
        <p>고객센터: 1899-9161 <span>&lt;평일 7:00 ~ 22:00 │ 주말/공휴일 9:00 ~ 18:00&gt;</span></p>
      </div>
    </footer>
  );
};

export default Footer;

