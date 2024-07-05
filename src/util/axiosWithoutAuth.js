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

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default axiosWithOutAuth;
