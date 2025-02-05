import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTop(): void {
   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
}
