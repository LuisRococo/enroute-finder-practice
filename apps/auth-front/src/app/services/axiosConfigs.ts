import axios, { AxiosError, AxiosInstance } from 'axios';
import { createAuthError } from '../../util/authError';

export const axiosAuthInstance: AxiosInstance = axios.create({
   baseURL: process.env['NX_API_URL'],
   timeout: 4000,
});

axiosAuthInstance.interceptors.response.use(
   (response: any) => response,
   (error) => {
      if (error instanceof AxiosError && error.isAxiosError) {
         const errorEvent = new CustomEvent('authError', {
            detail: createAuthError(error),
         });
         window.dispatchEvent(errorEvent);
      }
   }
);
