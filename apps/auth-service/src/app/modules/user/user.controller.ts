import {
   AuthRoutes,
   CreateUserDAO,
   CreateUserDTO,
   DeleteUserDAO,
   GetUserDTO,
   GetUsersDTO,
   TokenPayload,
   validateVerificationCodeDTO,
} from '@finder/definitions';
import { Body, Controller, Delete, Get, Post, Request, Type, UseGuards } from '@nestjs/common';
import { Types } from 'mongoose';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { UserDocument } from '../../models/user';
import UserService from './user.service';

@Controller(AuthRoutes.USER.prefix)
export class UserController {
   constructor(private readonly userService: UserService) {}

   @Get(AuthRoutes.USER.GET.path)
   async getuser(@Body() getUserDTO: GetUserDTO): Promise<UserDocument> {
      return await this.userService.getUser(getUserDTO);
   }

   @Get(AuthRoutes.USER.GET_ALL.path)
   async getAllusers(@Body() getUsersDTO: GetUsersDTO): Promise<UserDocument[]> {
      return await this.userService.getAllusers(getUsersDTO);
   }

   @Post(AuthRoutes.USER.CREATE.path)
   async createUser(@Body() createUserDTO: CreateUserDTO): Promise<CreateUserDAO> {
      return await this.userService.createUser(createUserDTO);
   }

   @Delete(AuthRoutes.USER.DELETE.path)
   @UseGuards(JwtAuthGuard)
   async DeleteUser(@Request() request): Promise<DeleteUserDAO> {
      const tokenInfo: TokenPayload = request.user;

      const userIdObject: Types.ObjectId = new Types.ObjectId(tokenInfo.sub);
      return await this.userService.deleteUser(userIdObject);
   }

   @Post(AuthRoutes.USER.VERIFY.path)
   async VerifyUser(@Body() body: validateVerificationCodeDTO) {
      return await this.userService.validateAccount(body);
   }
}
