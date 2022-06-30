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
      },
   },
   AUTH: {
      prefix: 'auth',
      LOGIN: {
         method: HttpMethod.POST,
         path: 'login',
      },
      PROFILE: {
         method: HttpMethod.GET,
         path: 'user-profile',
      },
   },
   PERSONAL_QUESTION: {
      prefix: 'personalQuestion',
      CREATE: {
         method: HttpMethod.POST,
         path: '',
      },
      CREATE_MANY: {
         method: HttpMethod.POST,
         path: 'create-multiple',
      },
   },
   USER: {
      prefix: 'user',
      GET: {
         method: HttpMethod.GET,
         path: '',
      },
      GET_ALL: {
         method: HttpMethod.GET,
         path: 'all',
      },
      CREATE: {
         method: HttpMethod.POST,
         path: '',
      },
      DELETE: {
         method: HttpMethod.POST,
         path: '',
      },
      VERIFY: {
         method: HttpMethod.POST,
         path: 'verify',
      },
   },
   VERIFICATION_CODE: {
      prefix: 'verification',
      GET: {
         method: HttpMethod.GET,
         path: '',
      },
   },
};
