import { AuthDAO, LoginDTO, User, validateUserDTO } from '@finder/definitions';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import UserService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../../models/user';

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
      const user = await this.userService.findUserByLogin(userInfo);
      return user;
   }
}
