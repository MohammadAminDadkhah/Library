import axios from 'axios';

import applyInterceptors from './interceptors';

const BaseUrl = "http://127.0.0.1:3000";
console.log(BaseUrl);

const axiosClient = axios.create({
  baseURL: BaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

applyInterceptors(axiosClient);

export default axiosClient;
