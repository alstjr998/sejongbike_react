import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyMenu = () => {

  const [name, setName] = useState("");

  useEffect(() => {
    getName();
  }, []);
  
  const getName = async () => {
    const token = localStorage.getItem("accessToken");
    
    if(token) {
      try {
        const response = await axios("http://localhost:8080/mypage", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          url: `http://localhost:8080/mypage`,
        });

        setName(response.data.name);

      } catch (error) {
        console.error("조회 실패!", error);
      }
    }
  }


  return(
    <Link to="/">{name}</Link>
  );
};

export default MyMenu;