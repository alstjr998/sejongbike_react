import axios from 'axios';

const axiosWithAuth = async (url, method = 'GET', data = null, options = {}) => {
  let token = localStorage.getItem("accessToken");

  // 토큰이 없으면 로그인 페이지로 리디렉션
  if (!token) {
    window.location.href = "/login";
    return;
  }

  try {
    const response = await axios({
      url: url,
      method: method,
      withCredentials: true,
      data: (method === 'POST' || method === 'PATCH' || method === 'DELETE') ? data : null,
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    // 응답 헤더에서 새로운 토큰 확인
    const newToken = response.headers['Authorization'];
    if (newToken) {
      // 'Bearer ' 접두사 제거 후 새로 저장
      const cleanToken = newToken.replace('Bearer ', '');
      localStorage.setItem("accessToken", cleanToken);
    }

    return response;
  } catch (error) {
    // 토큰이 유효하지 않은 경우 리프레시 토큰을 통해 새로운 액세스 토큰을 요청
    if (error.response && error.response.status === 401) {
      try {
        const refreshResponse = await axios.post('http://localhost:8080/refresh-token', null, {
          withCredentials: true,
        });

        // 새로운 액세스 토큰 저장
        const newAccessToken = refreshResponse.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        // 원래 요청을 새로운 액세스 토큰으로 다시 시도
        const retryResponse = await axios({
          url: url,
          method: method,
          data: (method === 'POST' || method === 'PUT' || method === 'DELETE') ? data : null,
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        });

        return retryResponse;
      } catch (refreshError) {
        // 리프레시 토큰도 유효하지 않은 경우 로그인 페이지로 리디렉션
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
};

export default axiosWithAuth;
