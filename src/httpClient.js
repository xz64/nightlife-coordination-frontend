import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

instance.interceptors.response.use(
  null,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/api/login/github';
    }
    return Promise.reject(error);
  },
);

export default instance;
