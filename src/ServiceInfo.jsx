import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceInfoContent from "./components/serviceinfopage/ServiceInfoContent";

const ServiceInfo = () => {
  return(
    <>
      <Header />
      
      <div className="responsiveMenu">
        <div id="responsiveMenuTitle">
          <p>어울링이란</p>
        </div>
        <div id="responsiveMenuDropdown">
          <p>서비스안내</p>
          <p id="dropdownBtn">▶</p>
        </div>
      </div>

      <ServiceInfoContent />
      <Footer />
    </>
  );
};

export default ServiceInfo;