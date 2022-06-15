import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import AuthController from './auth.controller';
import AuthService from './auth.service';
import { JwtStrategy } from './guards/jwt.strategy';
import { LocalStrategy } from './guards/local.strategy';

@Module({
   controllers: [AuthController],
   providers: [AuthService, LocalStrategy, JwtStrategy],
   imports: [
      JwtModule.register({
         secret: process.env.PRIVATE_KEY,
         signOptions: { expiresIn: '2h' },
      }),
      UserModule,
   ],
})
export default class AuthModule {}
