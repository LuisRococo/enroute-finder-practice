import { AuthDAO, LoginDTO } from '@finder/definitions';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import AuthService from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export default class AuthController {
   constructor(private authService: AuthService) {}

   //EL DECORADOR USERGUARD HACE QUE SE EJECUTE EL CODIGO DEL GUARD ANTES DE ESA RUTA
   @UseGuards(LocalAuthGuard)
   @Post('login')
   login(@Body() loginInfo: LoginDTO) {
      return this.authService.login(loginInfo);
   }
}
