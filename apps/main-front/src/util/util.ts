import { FRONT_EVENT_NAMES, LOCAL_STORAGE_KEYS } from '@finder/definitions';

export function shouldBeHidden(actualLocation: string, routesToHide: any) {
   for (let index = 0; index < routesToHide.length; index++) {
      const route: string = routesToHide[index].url;
      if (actualLocation.match(route)) {
         return true;
      }
   }
   return false;
}

export function setLocalStorageToken(token: string) {
   localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token);
   window.dispatchEvent(new Event(FRONT_EVENT_NAMES.SET_AUTH_TOKEN));
}

export function logoutUser() {
   localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
   window.dispatchEvent(new Event(FRONT_EVENT_NAMES.SET_AUTH_TOKEN));
}
