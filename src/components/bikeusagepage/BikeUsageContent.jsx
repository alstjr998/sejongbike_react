import '../../assets/bikeusage_css/bikeusage.css';


const BikeUsageContent = () => {
  return(
    <>
      <div id="pageTitle">
        <div>
          <p>자전거 이용정보</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>자전거 이용 안전 10대 수칙</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>타기 전에 안전모(헬멧)을 착용합니다.</li>
              <li>음주 후에는 자전거를 절대 타지 않습니다.</li>
              <li>우측통행을 지키고 차량과 같은 방향으로 주행합니다.</li>
              <li>우산과 핸드폰은 자전거 운전 시 사용하지 않습니다.</li>
              <li>어두워지면 전조등과 반사등을 반드시 사용합니다.(매직바이크 및 형광스틱, 형광밴드, 반사체 스티커 등 사용)</li>
              <li>신호기가 없는 교차로 또는 좁은 길에서 큰길로 진입할 경우는 반드시 일시정지하여 안전을 확인합니다.</li>
              <li>보행자에게는 경보벨을 울리거나 말하여 주의를 유도합니다.</li>
              <li>자전거 횡단보도를 이용하고, 횡단보도를 이용할 때는 자전거에서 내려서 자전거를 끌고 가야합니다.</li>
              <li>내리막길에서 무리하게 속력을 내지 않으며, 뒷바퀴에 먼저 제동을 가한 뒤 앞바퀴에 제동을 가합니다.</li>
              <li>상시적으로 브레이크 점검을 비롯한 자전거 정비를 시행합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>브레이크 조작하기</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>앞 브레이크는 멈춤 기능, 뒤 브레이크는 속력을 줄여주는 역할을 수행합니다.</li>
              <li>기술표준원 고시 제2009-0978호(2009.12.30)에 따라 2010년 생산제품부터 자전거의 브레이크 위치가 바뀝니다.<br />왼쪽 -&gt; 앞 브레이크, 오른쪽 -&gt; 뒤 브레이크</li>
              <li>뒤 브레이크를 잡아 속력을 줄이고 앞 브레이크로 완전히 멈추면 됩니다.</li>
              <li>돌발상황이 발생하는 경우 앞/뒤 브레이크를 동시에 잡아 멈추면 순간적인 위험을 피할 수 있습니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>기어(변속기) 조작하기</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>기어는 반드시 자전거의 페달을 돌리면서 조작해야 합니다.</li>
              <li>앞/뒤 변속레버를 동시에 조작하면 안됩니다.</li>
              <li>언덕을 오르기 위해서는 낮은 기어로, 내리막에서는 높은 기어로 바꿔줍니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>자전거 끌기</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>자기 몸에서 바깥쪽(왼쪽)으로 약간 (15˚ 정도)밀어주는 기분으로 편안하게 서서 자전거의 무게를 느끼지 않을 정도가 되어야 합니다.</li>
              <li>자전거는 도로교통법상 &apos;차&apos;에 속하기 때문에 자전거를 끌 때 &apos;우측통행&apos;을 습관화하여야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>자전거 출발하기</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>자전거는 반드시 &apos;정지/멈춤&apos; 상태에서 출발해야 합니다.</li>
              <li>출발하기 전 전방과 후방상황을 확인하고 안전하게 출발합니다.</li>
              <li>자전거를 이용하기 전에 반드시 자전거의 이상 유무를 확인해야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>자전거 멈추기</p>
        </div>
        <div className="context">
          <div className="listDescription">
            <ul id="bikeUsageList">
              <li>뒤 브레이크를 잡아 속력을 줄이고 앞 브레이크로 완전히 멈추면 됩니다.(7:3 비율)</li>
              <li>브레이크를 잡아주면서 오른발은 디딜 장소(멈출 장소)로 한 후 밟으면 됩니다.</li>
              <li>멈추기를 시도하기 전 반드시 뒤쪽의 상황과 멈추는 장소의 상황을 살펴야 합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeUsageContent;