import '../../assets/duty_css/duty.css'

const DutyContent = () => {
  return(
    <>
      <div id="pageTitle">
        <div>
          <p>의무와 책임</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>기본사항</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul>
              <li>보다 많은 시민들의 어울링 이용을 위해 자전거 대여 후 90분이 지나면, 별도의 이용료가 발생합니다.</li>
              <ul style={{listStyle: "none"}}>
                <li><span>Tip</span> <strong>기본 대여시간 내에 자전거를 반납 후 재대여 할 경우 별도의 이용료가 발생하지 않습니다.</strong></li>
              </ul>
              <li>자전거 운영을 위해 이용자 휴대전화 번호가 변경되었을 경우, 앱에서 변경을 부탁드립니다.</li>
              <li>추가요금이 결제되지 않으면 자전거 이용이 불가능 합니다.</li>
              <ul style={{listStyle: "none"}}>
                <li><span>Tip</span> <strong>정회원의 경우 추가요금 정산은 권한 연장시 소급 결제합니다.</strong></li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>분실 및 손실 위약금</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul>
              <li>어울림 시설물을 고의적으로 훼손 또는 어울림 자전거 분실 및 절도 시에는 관련 규정에 따라 정한 요금을 부과합니다.</li>
              <li>자전거 이용 중 위법, 부당한 행위로 발생한 손실 및 비용은 이용자가 부담해야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>부당한 인권침해 행위</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul>
              <li>상담원 및 어울림 관련 관리자에게 무리한 요구 및 언어폭력, 폭언, 성희롱에 대하여 다양한 법 적용을 받을 수 있습니다.</li>
              <ul style={{listStyle: "none"}}>
                <li>※ 『정보통신망이용촉진및정보보호등』에 의거 공포/불안 유발죄 등 적용.</li>
                <li>※ 『성폭력범죄의처벌등에관한특례법』에 의거한 &lsquo;통신매체이용음란죄&rsquo;등 적용.</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>어울링 주의사항</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul>
              <li>자전거는 항상 정비 상태를 점검하고 있으나, 운행 전 브레이크 등 동작유무 등을 반드시 확인해 주십시오.</li>
              <li>운행시 급격한 진로변경은 삼가해 주시고, 주변에 차 또는 사람이 오는지 살펴 주십시오.</li>
              <li>어울링은 일반생활용 자전거로서 경주, 산악용, 자전겨 묘기 등의 특수목적을 위해 사용할 수 없습니다.</li>
              <li>운행중 핸드폰 통화 및 스마트 단말기 조작을 삼가해 주십시오.</li>
              <li>한 자전거에 2인 이상 탑승은 삼가 주십시오.</li>
              <li>어울링을 이용하여 자전거 묘기는 절대 금지합니다.</li>
              <li>어울링 대여소가 아닌 곳에 정차 및 주차할 경우에는 반드시 자전거에 부착된 &lsquo;보조잠금장치&rsquo;를 이용하여 잠근 뒤 용무를 보십시오.</li>
              <li>짐받이 바구니에 과다한 중량을 싣지 말아야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DutyContent;