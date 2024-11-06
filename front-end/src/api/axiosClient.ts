import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api',  // Địa chỉ backend của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để thêm token vào header Authorization nếu có
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
