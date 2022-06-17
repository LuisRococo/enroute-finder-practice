import { AuthDAO, LOCAL_STORAGE_KEYS } from '@finder/definitions';

export function shouldBeHidden(actualLocation: string, routesToHide: any) {
   for (let index = 0; index < routesToHide.length; index++) {
      const route: string = routesToHide[index].url;
      if (actualLocation.match(route)) {
         return true;
      }
   }
   return false;
}

export function saveAuthToken(authDao: AuthDAO) {
   const token: string = authDao.jwt;
   window.localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token);
}
