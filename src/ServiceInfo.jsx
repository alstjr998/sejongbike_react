import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceInfoContent from "./components/serviceinfopage/ServiceInfoContent";
import DropdownMenuEouling from "./components/DropdownMenuEouling";

const ServiceInfo = () => {

  const pageName = "서비스안내";

  return(
    <>
      <Header />
      <DropdownMenuEouling pageName={pageName}/>
      <ServiceInfoContent />
      <Footer />
    </>
  );
};

export default ServiceInfo;