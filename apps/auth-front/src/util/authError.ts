import { AuthRoutes } from '@finder/definitions';
import { AxiosError } from 'axios';

export interface AuthServiceError {
   title: string;
   message: string;
}

export const createAuthError = (error: AxiosError): AuthServiceError => {
   if (!error.response)
      return {
         title: 'Ooops',
         message: 'Algo salio mal, vuelve a intentar',
      };

   switch (error.config.url) {
      case AuthRoutes.AUTH.LOGIN.path:
         switch (error.response.status) {
            case 401:
               return {
                  title: 'Usuario inexistente',
                  message: 'No se encontro ningun usuario con el correo y email que proporcionaste',
               };
            case 403:
               return {
                  title: 'Usuario no verificado',
                  message: 'Verifica tu usario para poder usar la app',
               };
            default:
               return {
                  title: 'Ooops',
                  message: 'Algo salio mal, vuelve a intentar',
               };
         }
      default:
         return {
            title: 'Ooops',
            message: 'Algo salio mal, vuelve a intentar',
         };
   }
};
