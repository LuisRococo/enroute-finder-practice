import { AuthDAO, LoginDTO, User } from '@finder/definitions';
import { Injectable } from '@nestjs/common';
import UserService from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}
  login(info: LoginDTO): AuthDAO {
    const user: User = this.userService.findUser(info);

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
}
