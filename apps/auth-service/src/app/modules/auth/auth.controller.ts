import { AuthDAO, GetUserDTO, LoginDTO, TokenPayload } from '@finder/definitions';
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Types } from 'mongoose';
import { UserDocument } from '../../models/user';
import UserService from '../user/user.service';
import AuthService from './auth.service';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../../guards/local-auth.guard';

@Controller('auth')
export default class AuthController {
   constructor(private authService: AuthService, private readonly userService: UserService) {}

   //EL DECORADOR USERGUARD HACE QUE SE EJECUTE EL CODIGO DEL GUARD ANTES DE ESA RUTA
   @UseGuards(LocalAuthGuard)
   @Post('login')
   async login(@Request() req): Promise<AuthDAO> {
      const loginDTO: LoginDTO = { email: req.user.email, password: req.user.password };
      return await this.authService.login(loginDTO);
   }

   @UseGuards(JwtAuthGuard)
   @Get('user-profile')
   getUserProfile(@Request() req: TokenPayload) {
      const getUserDTO: GetUserDTO = { _id: new Types.ObjectId(req.sub) };
      return this.userService.getUser(getUserDTO);
   }
}
