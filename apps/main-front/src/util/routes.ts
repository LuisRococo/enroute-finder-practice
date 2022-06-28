const routes = {
   home: {
      url: '/',
      name: 'Home',
   },
   login: {
      url: '/log-in',
      name: 'Log In',
   },
   signup: {
      url: '/sign-up',
      name: 'Sign Up',
   },
   find: {
      url: '/find',
      name: 'Find',
   },
   profile: {
      url: '/profile',
      name: 'Profile',
   },
   verification: {
      url: '/verification',
      name: 'verification',
   },
};

export const navUnloggedRoutes = [routes.home, routes.login];

export const navLoggedRoutes = [routes.home, routes.find, routes.profile];

export const routesHideNav = [routes.login, routes.signup, routes.verification];

export const routesHideFooter = [routes.login, routes.signup, routes.verification];

export default routes;
