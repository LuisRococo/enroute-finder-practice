import { HttpMethod, ServiceRoutes, Url } from '../routes';

export interface AuthServiceRoutes extends ServiceRoutes {
   ABOUT: {
      prefix: string;
      CREATE: Url;
   };
   AUTH: {
      prefix: string;
      LOGIN: Url;
      PROFILE: Url;
   };
   PERSONAL_QUESTION: {
      prefix: string;
      CREATE: Url;
      CREATE_MANY: Url;
   };
   USER: {
      prefix: string;
      GET: Url;
      GET_ALL: Url;
      CREATE: Url;
      DELETE: Url;
      VERIFY: Url;
   };
   VERIFICATION_CODE: {
      prefix: string;
      GET: Url;
   };
}

export const AuthRoutes: AuthServiceRoutes = {
   ABOUT: {
      prefix: 'about',
      CREATE: {
         method: HttpMethod.POST,
         path: '',
         getPath: () => '/' + AuthRoutes.ABOUT.prefix + '/' + AuthRoutes.ABOUT.CREATE.path,
      },
   },
   AUTH: {
      prefix: 'auth',
      LOGIN: {
         method: HttpMethod.POST,
         path: 'login',
         getPath: () => '/' + AuthRoutes.AUTH.prefix + '/' + AuthRoutes.AUTH.LOGIN.path,
      },
      PROFILE: {
         method: HttpMethod.GET,
         path: 'user-profile',
         getPath: () => '/' + AuthRoutes.ABOUT.prefix + '/' + AuthRoutes.AUTH.PROFILE.path,
      },
   },
   PERSONAL_QUESTION: {
      prefix: 'personalQuestion',
      CREATE: {
         method: HttpMethod.POST,
         path: '',
         getPath: () =>
            '/' +
            AuthRoutes.PERSONAL_QUESTION.prefix +
            '/' +
            AuthRoutes.PERSONAL_QUESTION.CREATE.path,
      },
      CREATE_MANY: {
         method: HttpMethod.POST,
         path: 'create-multiple',
         getPath: () =>
            '/' +
            AuthRoutes.PERSONAL_QUESTION.prefix +
            '/' +
            AuthRoutes.PERSONAL_QUESTION.CREATE_MANY.path,
      },
   },
   USER: {
      prefix: 'user',
      GET: {
         method: HttpMethod.GET,
         path: '',
         getPath: () => '/' + AuthRoutes.USER.prefix + '/' + AuthRoutes.USER.GET.path,
      },
      GET_ALL: {
         method: HttpMethod.GET,
         path: 'all',
         getPath: () => '/' + AuthRoutes.USER.prefix + '/' + AuthRoutes.USER.GET_ALL.path,
      },
      CREATE: {
         method: HttpMethod.POST,
         path: '',
         getPath: () => '/' + AuthRoutes.USER.prefix + '/' + AuthRoutes.USER.CREATE.path,
      },
      DELETE: {
         method: HttpMethod.POST,
         path: '',
         getPath: () => '/' + AuthRoutes.USER.prefix + '/' + AuthRoutes.USER.DELETE.path,
      },
      VERIFY: {
         method: HttpMethod.POST,
         path: 'verify',
         getPath: () => '/' + AuthRoutes.USER.prefix + '/' + AuthRoutes.USER.VERIFY.path,
      },
   },
   VERIFICATION_CODE: {
      prefix: 'verification',
      GET: {
         method: HttpMethod.GET,
         path: '',
         getPath: () =>
            '/' + AuthRoutes.VERIFICATION_CODE.prefix + '/' + AuthRoutes.VERIFICATION_CODE.GET.path,
      },
   },
};
