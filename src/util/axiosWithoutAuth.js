import axios from 'axios';

const axiosWithOutAuth = async (url, method = 'GET', data = null, options = {}) => {

  try {
    const response = await axios({
      url: url,
      method: method,
      data: method === 'POST' ? data : null,
      ...options,
      headers: {
        ...options.headers,
      },
    });

    // 응답 헤더에서 새로운 토큰 확인
    const newToken = response.headers['authorization'];
    if (newToken) {
      // 'Bearer ' 접두사 제거 후 새로 저장
      const cleanToken = newToken.replace('Bearer ', '');
      localStorage.setItem("accessToken", cleanToken);
    }

    return response;
  } catch (error) {
    // 토큰이 유효하지 않은 경우 로그인 페이지로 리디렉션
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
};

export default axiosWithOutAuth;
