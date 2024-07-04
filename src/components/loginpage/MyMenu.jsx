import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../util/axiosWithAuth";

const MyMenu = (props) => {

  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, []);
  
  const getName = async () => {
    try {
      const response = await axiosWithAuth(`${props.backendUrl}/mypage`);

      setName(response.data.name);

    } catch (error) {
      console.error("조회 실패!", error);
    }
  };

  return(
    <Link to="/mypage">{name}</Link>
  );
};

export default MyMenu;