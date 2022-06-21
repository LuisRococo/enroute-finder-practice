import { AuthDAO, LoginDTO, User, validateUserDTO } from '@finder/definitions';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { createHmac } from 'crypto';
import { hashPassword } from 'apps/auth-service/src/utils/auth';

@Injectable()
export default class AuthService {
   constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}
   async login(info: LoginDTO): Promise<AuthDAO> {
      const user: User = await this.userService.getUser(info);

      if (!user) {
         return null;
      }

      const payload = {
         user_id: user._id,
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
