import axios, { AxiosInstance } from 'axios';

export const axiosMainInstance: AxiosInstance = axios.create({
   baseURL: process.env['NX_API_URL'],
   timeout: 4000,
});
