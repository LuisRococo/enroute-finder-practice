import { AuthDAO, LOCAL_STORAGE_KEYS, UnverifiedUserDAO } from '@finder/definitions';

export function saveAuthToken(authDao: AuthDAO) {
   const token: string = authDao.jwt;
   window.localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, token);
}

export function saveUserId(unverifiedUserDAO: UnverifiedUserDAO) {
   window.localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, JSON.stringify(unverifiedUserDAO));
}
