import DropdownMenuCustomer from "./components/DropdownMenuCustomer";
import FaqContent from "./components/faqpage/FaqContent";

const Faq = () => {

  const pageName = "자주하는질문";

  return(
    <>
      <DropdownMenuCustomer pageName={pageName} />
      <FaqContent />
    </>
  );
};

export default Faq;