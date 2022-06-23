import { CreateUserDAO, CreateUserDTO, GetUserDTO, GetUsersDTO } from '@finder/definitions';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDocument } from '../../models/user';
import UserService from './user.service';

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get()
   async getuser(@Body() getUserDTO: GetUserDTO): Promise<UserDocument> {
      return await this.userService.getUser(getUserDTO);
   }

   @Get('all')
   async getAllusers(@Body() getUsersDTO: GetUsersDTO): Promise<UserDocument[]> {
      return await this.userService.getAllusers(getUsersDTO);
   }

   @Post()
   async createUser(@Body() createUserDTO: CreateUserDTO): Promise<CreateUserDAO> {
      const userDocument = await this.userService.createUser(createUserDTO);
      const createUserDAO: CreateUserDAO = {
         age: userDocument.age,
         email: userDocument.email,
         gender: userDocument.gender,
         image_profile: userDocument.image_profile,
         lookingfor: userDocument.lookingfor,
         name: userDocument.name,
         phone: userDocument.phone,
         preference: userDocument.preference,
         last_name: userDocument.last_name,
      };
      return createUserDAO;
   }
}
