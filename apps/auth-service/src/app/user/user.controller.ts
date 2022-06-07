import { CreateUserDTO, LoginDTO, User } from '@finder/definitions';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserService from './user.service';

@Controller('/user')
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post('/')
  addUser(@Body() createUserDTO: CreateUserDTO): User {
    return this.userService.addUser(createUserDTO);
  }

  @Get('/')
  findUser(user: LoginDTO): User | undefined {
    return this.userService.findUser(user);
  }
}
