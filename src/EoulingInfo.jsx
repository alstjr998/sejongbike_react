import DropdownMenuEouling from "./components/DropdownMenuEouling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoContent from "./components/eoulinginfopage/InfoContent";

const EoulingInfo = () => {

  const pageName = "어울링소개";

  return(
    <>
      <Header />
      <DropdownMenuEouling pageName={pageName} />
      <InfoContent />
      <Footer />
    </>
  );
};

export default EoulingInfo;