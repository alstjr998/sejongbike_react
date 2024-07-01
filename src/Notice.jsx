import DropdownMenuCustomer from "./components/DropdownMenuCustomer";
import NoticeContent from "./components/noticepage/NoticeContent";

const Notice = (props) => {

  const pageName = "공지사항";

  return(
    <>
      <DropdownMenuCustomer pageName={pageName} />
      <NoticeContent backendUrl={props.backendUrl}/>
    </>
  );
};

export default Notice; 