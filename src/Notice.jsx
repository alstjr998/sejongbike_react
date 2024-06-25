import NoticeContent from "./components/noticepage/NoticeContent";

const Notice = (props) => {
  return(
    <>
      <NoticeContent backendUrl={props.backendUrl}/>
    </>
  );
};

export default Notice; 