import '../../assets/serviceinfo_css/serviceinfo.css';
import PaymentTable from './PaymentTable';
import RefundTable from './RefundTable';

const ServiceInfoContent = () => {

  const width70L = {
    width: "70%",
    textAlign: "left",
  };

  return(
    <>
      <div id="pageTitle">
        <div>
          <p>서비스안내</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>이용대상 및 운영시간</p>
        </div> 
        <div className="contentTable">
          <table id="userTimeTable">
            <tbody>
              <tr>
                <td width={30+"%"}>이용대상</td>
                <td style={width70L}>◎ 만 15세 이상의 남녀노소</td>
              </tr>
              <tr>
                <td width={30+"%"}>운영시간</td>
                <td style={width70L}>◎ 24시간 연중무휴 운영</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="content">
        <div className="infoSubTitle">
          <p>회원 구분</p>
        </div> 
        <div className="contentTable">
          <table id="userTimeTable">
            <tbody>
              <tr>
                <td width={30+"%"}>정회원</td>
                <td style={width70L}>◎ 7일권 이상의 정회원 서비스를 가입한 유료 결제 회원</td>
              </tr>
              <tr>
                <td width={30+"%"}>준회원</td>
                <td style={width70L}>◎ 회원 가입은 하였으나 정회원 서비스를 가입하지 않은 회원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <PaymentTable />
      <RefundTable />
    </>
  );
};

export default ServiceInfoContent;