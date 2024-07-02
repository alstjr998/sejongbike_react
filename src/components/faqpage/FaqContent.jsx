const FaqContent = () => {
  return(
    <>
      <div id="pageTitle">
        <div>
          <p>자주하는질문</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>Q. 기본 대여시간 초과 시 추가요금은 얼마인가요?</p>
        </div>
        <div className="context">
          <div className="contentSubTitle">
            <h3>&lt;추가요금 안내&gt;</h3>
          </div>
          <div className="description">
            <p>정회원은 90분 이후 30분당 500원, 일반회원은 90분 이후 30분당 1,000원이 부과됩니다.</p>
          </div>
        </div>
        <div className="context">
          <div className="contentSubTitle">
            <h3>&lt;추가요금 부과수단&gt;</h3>
          </div>
          <div className="description">
            <p>사용자 확인에 사용한 본인 명의 신용카드, 휴대폰 소액결제 및 간편결제 등으로 결제가 가능합니다.</p>
            <p>※소액결제 차단 등으로 인해 추가요금이 정상적으로 결제되지 않았을 경우에는 계좌이체 등 대체 결제수단을 통해 결제할 수 있습니다. 콜센터(1899-9161)로 연락주시면 관련 사항 안내 및 결제를 진행해 드리도록 하겠습니다.</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>Q. 어울링 자전거 이용 비용은 얼마인가요?</p>
        </div>
        <div className="context">
          <div className="description">
            <p>일반 회원으로 이용하는 1일 이용권은 1,000원이며, 정회원 서비스를 이용할 경우 이용 기간에 따라 달라집니다.</p>
            <p>※자세한 금액표는 <a href="/serviceinfo">서비스 안내 페이지</a>를 참고하세요.</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>Q. 대여소는 무엇이며 어디에 있나요?</p>
        </div>
        <div className="context">
          <div className="description">
            <p>대여소는 어울링 자전거를 이용하거나 반납하는 거치대를 통칭하는 용어입니다.</p>
            <p>한솔동 첫마을, 버스 정류장 등 2024.04.30 기준 총 671개의 대여소를 운영 중에 있습니다.</p>
            <p>※자세한 위치는 <a href="/dockfind">대여소 조회 페이지</a>를 참고하세요.</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>Q. 어울링 자전거란 무엇인가요?</p>
        </div>
        <div className="context">
          <div className="description">
            <p>언제나, 어디서나 자유롭게 자전거를 이용하여 목적지로 이동할 수 있는, 세종 시민을 위한 녹색대중교통 수단으로 운영하는 자전거 대여제입니다. &apos;어울링&apos;이라는 명칭은 어울(어울림)과 링(Ring - 자전거 또는 동그라미)의 합성어로 친근감이 있는데다 자전거 이용 활성화 취지에도 부합되어 세종시 공공자전거 명칭에 사용하고 있습니다.</p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>Q. 자전거를 대여한 곳에만 반납해야 하나요?</p>
        </div>
        <div className="context">
          <div className="description">
            <p>아닙니다. 자전거를 대여한 곳에 꼭 반납하실 필요는 없으며, 이용하신 후 가까운 어느 대여소에서라도 반납하실 수 있습니다.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;