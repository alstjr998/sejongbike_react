import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyMenu = (props) => {

  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, []);
  
  const getName = async () => {
    const token = localStorage.getItem("accessToken");
    
    if(token) {
      try {
        const response = await axios({
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          url: `${props.backendUrl}/mypage`,
        });

        setName(response.data.name);

      } catch (error) {
        console.error("조회 실패!", error);
      }
    }
  };

  return(
    <Link to="/mypage">{name}</Link>
  );
};

export default MyMenu;