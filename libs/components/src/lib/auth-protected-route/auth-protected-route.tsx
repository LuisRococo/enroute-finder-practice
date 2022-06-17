import styles from './auth-protected-route.module.scss';

/* eslint-disable-next-line */
export interface AuthProtectedRouteProps {}

export function AuthProtectedRoute(props: AuthProtectedRouteProps) {
   return (
      <div className={styles['container']}>
         <h1>Welcome to AuthProtectedRoute!</h1>
      </div>
   );
}

export default AuthProtectedRoute;
