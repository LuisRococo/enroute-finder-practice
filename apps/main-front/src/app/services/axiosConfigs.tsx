import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export const axiosMainInstance: AxiosInstance = axios.create({
   baseURL: process.env['NX_API_URL'],
   timeout: 4000,
});

axiosMainInstance.interceptors.response.use(onAxiosResponse, onAxiosError);

function onAxiosError(error: any) {
   if (error instanceof AxiosError && error.isAxiosError) {
      console.info(error);
   }
}

function onAxiosResponse(response: AxiosResponse) {
   return response;
}
