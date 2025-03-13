import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const applyInterceptors = (axiosClient: AxiosInstance) => {
  axiosClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => config,
    (error) => Promise.reject(error)
  );

  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      const status = error.response?.status;
      if (status === 401) {
        window.location.replace('/login');
      }
      return Promise.reject(error);
    }
  );
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
      const status = error.response?.status;
      if (status === 403 || status === 500) {
        throw new Error('something went wrong');
      }

      return Promise.reject(error);
    }
  );
};

export default applyInterceptors;
