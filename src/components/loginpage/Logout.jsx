import { Link, useNavigate } from "react-router-dom";

const Logout = (props) => {

  const navigate = useNavigate();
  
  const handleLogout = async () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      try {
        const response = await fetch("http://localhost:8080/logout", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          localStorage.removeItem("accessToken");
          props.onLogout(); // 로그아웃 상태로 전환
          navigate("/");
        } else {
          console.error("Failed to logout");
        }
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
  };

  return(
    <Link to="/" onClick={handleLogout}>로그아웃</Link>
  );
};

export default Logout;