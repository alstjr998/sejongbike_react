import DropdownMenuEouling from "./components/DropdownMenuEouling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InsuranceContent from "./components/insurancepage/InsuranceContent";

const Insurance = () => {

  const pageName = "시민자전거보험";

  return(
    <>
      <Header />
      <DropdownMenuEouling pageName={pageName} />
      <InsuranceContent />
      <Footer />
    </>
  );
};

export default Insurance;