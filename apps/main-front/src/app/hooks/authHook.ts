import { LOCAL_STORAGE_KEYS } from '@finder/definitions';
import { useEffect, useState } from 'react';

export const useIsAuth = () => {
   const [isAuth, setIsAuth] = useState<boolean>(false);

   useEffect(() => {
      const token: string | null = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);
      setIsAuth(token !== null);
   }, []);
};
