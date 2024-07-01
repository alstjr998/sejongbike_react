import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NoticePost = (props) => {

  const [formData, setFormData] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const contentWithBr = formData.content.replace(/\n/g, '<br>');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({ ...formData, content: contentWithBr }),
        url: `${props.backendUrl}/notice/request`,
      });
      if (response.ok) {
        navigate("/notice", { replace: true });
      } else {
        setError("공지사항 작성 실패.");
      }
    } catch (error) {
      setError("공지사항 작성 실패. 서버 오류입니다.");
    } finally {
      setLoading(false);
    }
  };

  return(
    <>
      <div id="pageTitle">
        <div>
          <p>공지사항 작성</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <form id="articleInput" onSubmit={handlePost}>
          <input
          type="text"
          id="titleInput"
          name="title"
          placeholder="제목을 입력해 주세요."
          value={formData.title}
          onChange={handleChange}
          required
          />
          <textarea
          type="text"
          id="contentInput"
          name="content"
          placeholder="내용을 입력해 주세요."
          value={formData.content}
          onChange={handleChange}
          required
          />
          <div className="postBtnContainer">
            <button type="submit" className="postBtn">
              <p style={{fontSize: "14px"}}>작성 완료</p>
            </button>
          </div>
        </form>
        
      </div>

      
    </>
  );
};

export default NoticePost;