import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UserService from './user.service';

@Controller('/user')
export default class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:username')
  getUser(@Param('username') username: string) {
    return this.userService.getUser(username);
  }

  @Post('/')
  addUser(@Body() body) {
    const { username, password } = body;
    this.userService.addUser(username, password);
  }
}
