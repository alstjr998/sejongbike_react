import DropdownMenuEouling from "./components/DropdownMenuEouling";
import InsuranceContent from "./components/insurancepage/InsuranceContent";

const Insurance = () => {

  const pageName = "시민자전거보험";

  return(
    <>
      <DropdownMenuEouling pageName={pageName} />
      <InsuranceContent />
    </>
  );
};

export default Insurance;