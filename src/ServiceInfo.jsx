import ServiceInfoContent from "./components/serviceinfopage/ServiceInfoContent";
import DropdownMenuEouling from "./components/DropdownMenuEouling";

const ServiceInfo = () => {

  const pageName = "서비스안내";

  return(
    <>
      <DropdownMenuEouling pageName={pageName}/>
      <ServiceInfoContent />
    </>
  );
};

export default ServiceInfo;