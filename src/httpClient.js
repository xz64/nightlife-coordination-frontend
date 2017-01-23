import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.response.use(
  null,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/api/login/github';
    }
  },
);

export default instance;
