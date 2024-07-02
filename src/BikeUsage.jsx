import DropdownMenuCustomer from "./components/DropdownMenuCustomer";
import BikeUsageContent from "./components/bikeusagepage/BikeUsageContent";

const BikeUsage = () => {

  const pageName = "자전거 이용정보";

  return(
    <>
      <DropdownMenuCustomer pageName={pageName} />
      <BikeUsageContent />
    </>
  );
};

export default BikeUsage;