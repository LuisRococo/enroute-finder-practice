import { AuthRoutes, AuthServiceError } from '@finder/definitions';
import routes from './routes';

window.addEventListener('authEvent', ((errorEvent: CustomEvent<AuthServiceError>) => {
   if (!errorEvent.detail) {
      return;
   }

   const { detail } = errorEvent;

   switch (detail.error.config.url) {
      case AuthRoutes.AUTH.LOGIN.getPath():
         switch (detail.error.response?.status) {
            case 403:
               window.location.replace(routes.verification.url);
               break;
            case 401:
               alert('Check your password and email');
               break;
         }
         break;
   }
}) as EventListener);
