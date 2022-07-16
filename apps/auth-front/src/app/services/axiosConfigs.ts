import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { createAuthError } from '../utils/authError';

export const axiosAuthInstance: AxiosInstance = axios.create({
   baseURL: process.env['NX_API_URL'],
   timeout: 4000,
});

axiosAuthInstance.interceptors.response.use(onAxiosResponse, onAxiosError);

function onAxiosError(error: AxiosError) {
   if (error instanceof AxiosError && error.isAxiosError) {
      const errorEvent: Event = new CustomEvent('authEvent', {
         detail: createAuthError(error),
      });
      window.dispatchEvent(errorEvent);
   }
}

function onAxiosResponse(response: AxiosResponse) {
   return response;
}
