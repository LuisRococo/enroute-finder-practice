import { FRONT_EVENT_NAMES, LOCAL_STORAGE_KEYS } from '@finder/definitions';
import { useEffect, useState } from 'react';

export const useIsAuth = () => {
   const [isAuth, setIsAuth] = useState<boolean>(false);

   function checkToken() {
      setIsAuth(localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN) !== null);
   }

   const chekingAuthValue = ({ key, newValue }: StorageEvent) => {
      if (key === LOCAL_STORAGE_KEYS.AUTH_TOKEN) {
         setIsAuth(newValue !== null);
      }
   };

   useEffect(() => {
      const token: string | null = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      setIsAuth(token !== null);

      //add events
      window.addEventListener(FRONT_EVENT_NAMES.SET_AUTH_TOKEN, checkToken);
      window.addEventListener('storage', chekingAuthValue);

      return () => {
         window.removeEventListener(FRONT_EVENT_NAMES.SET_AUTH_TOKEN, checkToken);
         window.removeEventListener('storage', chekingAuthValue);
      };
   }, []);

   return { isAuth };
};
