import { AuthDAO, AuthRoutes, LoginDTO } from '@finder/definitions';
import { axiosAuthInstance } from './axiosConfigs';

export const loginService = async (loginDTO: LoginDTO): Promise<AuthDAO> => {
   const { data } = await axiosAuthInstance.post<AuthDAO>(
      AuthRoutes.AUTH.LOGIN.getPath(),
      loginDTO
   );
   return data;
};
