import DropdownMenuEouling from "./components/DropdownMenuEouling";
import InfoContent from "./components/eoulinginfopage/InfoContent";

const EoulingInfo = () => {

  const pageName = "어울링소개";

  return(
    <>
      <DropdownMenuEouling pageName={pageName} />
      <InfoContent />
    </>
  );
};

export default EoulingInfo;