import { CreateUserDTO } from '@finder/definitions';
import { axiosMainInstance } from './axiosConfigs';

export async function apiSignIn(createUserDTO: CreateUserDTO) {
   const { data } = await axiosMainInstance.post<CreateUserDTO>('/user', createUserDTO);
   return data;
}
