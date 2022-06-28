import { CreateUserDAO, CreateUserDTO, validateVerificationCodeDTO } from '@finder/definitions';
import { AxiosResponse } from 'axios';
import { axiosMainInstance } from './axiosConfigs';

export async function apiSignIn(createUserDTO: CreateUserDTO): Promise<CreateUserDAO> {
   const { data } = await axiosMainInstance.post<CreateUserDAO>('/user', createUserDTO);
   return data;
}

export async function apiPostVerificationCode(
   verfyCodeDTO: validateVerificationCodeDTO
): Promise<AxiosResponse> {
   const response: AxiosResponse = await axiosMainInstance.post('/user/verify', verfyCodeDTO);
   return response;
}
