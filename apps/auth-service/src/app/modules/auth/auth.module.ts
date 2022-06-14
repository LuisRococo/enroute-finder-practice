import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import AuthController from './auth.controller';
import AuthService from './auth.service';

@Module({
   controllers: [AuthController],
   providers: [AuthService],
   imports: [
      JwtModule.register({
         secret: process.env.PRIVATE_KEY,
         signOptions: { expiresIn: '60s' },
      }),
      UserModule,
   ],
})
export default class AuthModule {}
