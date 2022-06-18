import { FC, ReactComponentElement } from 'react';
import { Navigate } from 'react-router-dom';

export interface AuthProtectedRouteProps {
   children: JSX.Element;
   isAuth: boolean;
}

export const GenericProtectedRoute: FC<AuthProtectedRouteProps> = ({ children, isAuth }) => {
   if (!isAuth) {
      return <Navigate to="/" replace />;
   }

   return children;
};

export default GenericProtectedRoute;
