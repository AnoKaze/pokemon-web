import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9001',
  timeout: 5000,
});

instance.interceptors.request.use(
  (request) => {
    // TODO: Add user data
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 1) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  (error) => {
    return Promise.reject(error.data);
  }
);

export default instance;