import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import UserService from '../user/user.service';
import AuthController from './auth.controller';
import AuthService from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
  imports: [
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export default class AuthModule {}
