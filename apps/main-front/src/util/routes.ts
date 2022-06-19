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
};

export const navUnloggedRoutes = [routes.home, routes.login];

export const navLoggedRoutes = [routes.find, routes.profile];

export const routesHideNav = [routes.login, routes.signup];

export const routesHideFooter = [routes.login, routes.signup];

export default routes;
