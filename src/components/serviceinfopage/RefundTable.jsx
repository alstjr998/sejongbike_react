
const RefundTable = () => {

  const width10p = {
    width: "10%",
  }

  const width15p = {
    width: "15%",
  };

  return(
    <div className="content">
      <div className="infoSubTitle">
        <p>환불정책</p>
      </div> 
      <div className="contentTable">
        <table id="refundTable">
          <thead>
            <tr>
              <th rowSpan={2} colSpan={2}>서비스 구분<br />(결제금액)</th>
              <th colSpan={3}>서비스 해지 요청시 환불 요금</th>
            </tr>
            <tr>
              <th>결제 7일 이하</th>
              <th>결제 14일 이하</th>
              <th>결제 14일 초과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} width={15+"%"}>연간회원<br />(30,000원)</td>
              <td width={10+"%"}>이용</td>
              <td width={28+"%"}>27,000원<br />기본요금(2,500원)+수수료(500원) 공제</td>
              <td width={28+"%"}>24,000원<br />기본요금(3,000원)+수수료(1,000원) 공제</td>
              <td rowSpan={4} width={19+"%"}>환불 요청일까지의 월별 이용요금 공제<br />(사용일수 x 월간회원권 이용요금) + 수수료(1,000원)</td>
            </tr>
            <tr>
              <td>비이용</td>
              <td colSpan={2}>30,000원</td>
            </tr>
            <tr>
              <td rowSpan={2}>반기회원<br />(20,000원)</td>
              <td>이용</td>
              <td>17,000원<br />기본요금(2,500원)+수수료(500원) 공제</td>
              <td>14,000원<br />기본요금(3,000원)+수수료(1,000원) 공제</td>
            </tr>
            <tr>
              <td>비이용</td>
              <td colSpan={2}>20,000원</td>
            </tr>
            <tr>
              <td rowSpan={2}>월간회원<br />(5,000원)</td>
              <td>이용</td>
              <td>2,000원<br />기본요금(2,500원)+수수료(500원) 공제</td>
              <td>환불 불가</td>
              <td rowSpan={6}>환불 불가</td>
            </tr>
            <tr>
              <td>비이용</td>
              <td>5,000원</td>
              <td>환불 불가</td>
            </tr>
            <tr>
              <td rowSpan={2}>주간회원<br />(2,500원)</td>
              <td>이용</td>
              <td colSpan={2}>환불 불가</td>
            </tr>
            <tr>
              <td>비이용</td>
              <td>2,500원</td>
              <td>환불 불가</td>
            </tr>
            <tr>
              <td rowSpan={2}>일반(준회원)<br />1일 이용권<br />(1,000원)</td>
              <td>이용</td>
              <td rowSpan={2} colSpan={2}>환불 불가</td>
            </tr>
            <tr>
              <td>비이용</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RefundTable;