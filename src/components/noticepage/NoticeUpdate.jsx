import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosWithAuth from "../../util/axiosWithAuth";

const NoticeUpdate = (props) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ id: "", title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getNoticeDetail();
  }, [id]);

  const getNoticeDetail = async () => {
    try {
      const response = await axiosWithAuth(`${props.backendUrl}/notice/${id}`);
      setFormData({
        id: `${id}`,
        title: response.data.title,
        content: response.data.content.replace(/<br>/g, '\n')
      });
    } catch (error) {
      setError("게시글을 불러오는 데 실패했습니다.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const contentWithBr = formData.content.replace(/\n/g, '<br>');

    try {
      const response = await axiosWithAuth(
        `${props.backendUrl}/notice/request/${id}`,
        'PATCH',
        { ...formData, content: contentWithBr }
      );
      if (response.status === 200) {
        navigate('/notice', { replace: true });
      } else {
        setError("공지사항 수정 실패.");
      }
    } catch (error) {
      setError("공지사항 수정 실패. 서버 오류입니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="pageTitle">
        <div>
          <p>공지사항 수정</p>
        </div>
        <hr />
      </div>

      <div className="content">
        <form id="articleInput" onSubmit={handleUpdate}>
          <input
            type="text"
            id="titleInput"
            name="title"
            placeholder="제목을 입력해 주세요."
            autoComplete="off"
            spellCheck="false"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            id="contentInput"
            name="content"
            placeholder="내용을 입력해 주세요."
            spellCheck="false"
            value={formData.content}
            onChange={handleChange}
            required
          />
          <div className="postBtnContainer">
            <button type="submit" className="requestBtn">
              <p style={{fontSize: "14px"}}>수정 완료</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NoticeUpdate;
