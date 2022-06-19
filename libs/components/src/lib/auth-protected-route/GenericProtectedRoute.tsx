import { FC, ReactComponentElement } from 'react';
import { Navigate } from 'react-router-dom';

export interface AuthProtectedRouteProps {
   children: JSX.Element;
   isAuth: boolean;
   redirectTo?: string;
}

export const GenericProtectedRoute: FC<AuthProtectedRouteProps> = ({ children, isAuth, redirectTo = '/' }) => {
   if (!isAuth) {
      return <Navigate to={redirectTo} replace />;
   }

   return children;
};

export default GenericProtectedRoute;
