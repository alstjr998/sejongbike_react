import DropdownMenuEouling from "./components/DropdownMenuEouling";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DutyContent from "./components/dutypage/DutyContent";

const Duty = () => {

  const pageName = "의무와 책임"

  return(
    <>
      <Header />
      <DropdownMenuEouling pageName={pageName} />
      <DutyContent />
      <Footer />
    </>
  );
};

export default Duty;