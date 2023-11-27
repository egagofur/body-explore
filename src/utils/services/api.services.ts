import axios from 'axios';
import configs from '../configs';

const axiosInstance = axios.create({
  baseURL: configs.NEXT_PUBLIC_BASE_URL,
});

export default axiosInstance;
