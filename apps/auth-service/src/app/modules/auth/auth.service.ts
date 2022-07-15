import { AuthDAO, LoginDTO, TokenPayload, User, validateUserDTO } from '@finder/definitions';
import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { createHmac } from 'crypto';
import { hashPassword } from 'apps/auth-service/src/app/utils/auth';
import VerificationCodeService from '../verificationCode/verificationCode.service';

@Injectable()
export default class AuthService {
   constructor(
      private readonly userService: UserService,
      private readonly jwtService: JwtService,
      private readonly verificationService: VerificationCodeService
   ) {}
   async login(info: LoginDTO): Promise<AuthDAO> {
      const user: User = await this.userService.getUser(info);

      if (!user.verified) {
         this.verificationService.sendVerificationCode(user._id, user.email);
         throw new HttpException('User is not verified', 403);
      }

      const payload: TokenPayload = {
         sub: user._id.toString(),
         email: user.email,
      };

      return {
         jwt: this.jwtService.sign(payload, { algorithm: 'HS512' }),
      };
   }

   async validateUser(userInfo: LoginDTO) {
      const hashedPassword: string = hashPassword(userInfo.password);
      userInfo.password = hashedPassword;

      const user = await this.userService.findUserByLogin(userInfo);
      return user;
   }
}
