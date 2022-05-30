import { useState } from "react";
import { ItMapData } from "types/itmap/itmap.type";
import useData from "./useData";

const useSelectShowCompany = () => {
  const [selectUserData, setSelectUserData] = useState<ItMapData>();
  const { testData } = useData();

  const getUserNavData = (idx: number) => {
    setSelectUserData(testData[idx]);
  };

  return {
    getUserNavData,
    selectUserData,
  };
};

export default useSelectShowCompany;
