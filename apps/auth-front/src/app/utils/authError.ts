import { AuthRoutes, AuthServiceError, UnverifiedUserDAO } from '@finder/definitions';
import { AxiosError } from 'axios';
import { saveUserId } from '../../util/localStorage';

export function createAuthError(error: AxiosError): AuthServiceError {
   const errorResult: AuthServiceError = {
      error: error,
      message: 'An error has ocurred',
      title: 'Error',
   };

   if (!error.response) return errorResult;

   switch (error.config.url) {
      case AuthRoutes.AUTH.LOGIN.getPath():
         switch (error.response.status) {
            case 403:
               errorResult.message = 'User is not verified';
               errorResult.title = 'User is not verified';
               saveUserId(error.response?.data as UnverifiedUserDAO);
               break;
         }
         break;
   }

   return errorResult;
}
