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
};

export const routesNoNav = [routes.login, routes.signup];

export const routesNoFooter = [routes.login, routes.signup];

export default routes;
