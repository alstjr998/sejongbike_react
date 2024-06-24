import DropdownMenuEouling from "./components/DropdownMenuEouling";
import DutyContent from "./components/dutypage/DutyContent";

const Duty = () => {

  const pageName = "의무와 책임"

  return(
    <>
      <DropdownMenuEouling pageName={pageName} />
      <DutyContent />
    </>
  );
};

export default Duty;