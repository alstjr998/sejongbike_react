
const PaymentTable = () => {
  return(
    <div className="content">
      <div className="infoSubTitle">
        <p>요금 안내 및 결제 방법</p>
      </div> 
      <div className="contentTable">
        <table id="paymentTable">
          <thead>
            <th>구분</th>
            <th colSpan={2}>정회원</th>
            <th>준회원</th>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={4}>기본 사용료<br />(90분 이내)</td>
              <td>연간회원(12개월)</td>
              <td>30,000원</td>
              <td rowSpan={4}>1일 이용권 : 1000원</td>
            </tr>
            <tr>
              <td>반기회원(6개월)</td>
              <td>20,000원</td>
            </tr>
            <tr>
              <td>월간회원(30일)</td>
              <td>5,000원</td>
            </tr>
            <tr>
              <td>주간회원(7일)</td>
              <td>2,500원</td>
            </tr>
            <tr>
              <td>요금결제수단</td>
              <td colSpan={3}>휴대폰 소액결제 / 신용(체크)카드 / 카카오페이 / 네이버페이</td>
            </tr>
            <tr>
              <td>결제 장소</td>
              <td colSpan={3}>어울링 앱</td>
            </tr>
            <tr>
              <td>추가요금</td>
              <td colSpan={2}>90분 이후 30분당 500원</td>
              <td>90분 이후 30분당 1,000원</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentTable;