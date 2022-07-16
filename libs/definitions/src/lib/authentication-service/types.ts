import { AxiosError } from 'axios';

export interface AuthServiceError {
   title: string;
   message: string;
   error: AxiosError;
}

export interface AuthErrorEvent {
   details: AuthServiceError;
}
