import '../../assets/insurance_css/insurance.css';

const InsuranceContent = () => {

  const width80L = {
    width: "80%",
    textAlign: "left",
  };

  return(
    <>
      <div id="pageTitle">
        <div>
          <p>시민자전거보험</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>시민자전거보험이란?</p>
        </div>
        <div className="context">
          <div className="description">
            <p>세종시가 직접 보험사와 계약하고, 보험료를 부담해 각종 자전거<sup>*</sup> 사고 등으로 인한 부상, 사망, 후유장애 등 보장</p>
            <ul style={{listStyle: "none"}}>
              <li><sup>*</sup> 자전거 이용 활성화에 관한 법률 제 2조(정의)에서 정한 자전거, 전기자전거</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>기본 정보</p>
        </div> 
        <div className="contentTable">
          <table id="insuranceInfoTable">
            <tbody>
              <tr>
                <td width={20+"%"}>보험 기간</td>
                <td style={width80L}>2024.03.16 ~ 2025.03.15 (1년)</td>
              </tr>
              <tr>
                <td width={20+"%"}>보험계약자</td>
                <td style={width80L}>세종특별자치시</td>
              </tr>
              <tr>
                <td width={20+"%"}>피보험자</td>
                <td style={width80L}>세종시에 주민등록을 두고 있는 모든 시민(외국인 포함)</td>
              </tr>
              <tr>
                <td width={20+"%"}>수익자</td>
                <td style={width80L}>피보험자 본인(사망 시 법정상속인)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>보장내용</p>
        </div> 
        <div className="contentTable" style={{marginBottom: "5px"}}>
          <table id="insuranceTable">
            <thead>
              <th style={{width: "20%"}}>구분</th>
              <th style={{width: "48%"}}>보장내용</th>
              <th>보장금액</th>
            </thead>
            <tbody>
              <tr>
                <td>사망</td>
                <td>세종시민이 자전거 교통사고로 사망한 경우</td>
                <td>500만원</td>
              </tr>
              <tr>
                <td>후유장애</td>
                <td>세종시민이 자전거 교통사고로<br />3~100% 후유장애가 발생한 경우</td>
                <td>500만원 한도</td>
              </tr>
              <tr>
                <td>진단 위로금</td>
                <td>세종시민이 자전거 교통사고로 4주 이상의 치료를 요한다는 진단을 받은 경우 진단일에 따라 지급<br />(최초 진단기준, 1회 지급)</td>
                <td>
                  4주 : 10만원<br />
                  5주 : 20만원<br />
                  6주 : 30만원<br />
                  7주 : 40만원<br />
                  8주 : 50만원<br />
                  <sup>*</sup>4주 이상, 6일 이상 입원 시 20만원
                </td>
              </tr>
              <tr>
                <td>벌금</td>
                <td>확정 판결로 벌금을 부담하는 경우</td>
                <td>2,000만원</td>
              </tr>
              <tr>
                <td>교통사고 처리지원금</td>
                <td>형사합의를 봐야하는 경우</td>
                <td>3,000만원 한도</td>
              </tr>
              <tr>
                <td>변호사 선임 비용</td>
                <td>구속영장에 의해 구속되거나, 검찰에 의해 기소된 경우</td>
                <td>200만원 한도</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="context" style={{marginTop: "5px"}}>
          <div className="listDescription">
            <ul>
              <li>타 보험과 관계없이 중복보상</li>
              <li>자세한 보험내용은 보험약관을 참고하시기 바랍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceContent;