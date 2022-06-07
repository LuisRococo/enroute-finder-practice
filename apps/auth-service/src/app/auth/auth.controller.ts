import { AuthDAO, LoginDTO } from '@finder/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import AuthService from './auth.service';

@Controller('auth')
export default class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  login(@Body() loginInfo: LoginDTO) {
    return this.authService.login(loginInfo);
  }
}
