import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from '@finder/definitions';
import { UserDocument } from '../../../models/user';
import AuthService from '../auth.service';

//THE FUNCTION OF THIS IS TO VALIDATE IF THE USER EXISTS BEFORE ENTERING THE LOGIN ROUTE
//I VALIDATES THAT THE USER EXISTS
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private authService: AuthService) {
      //ESTE STRATEGY NOS PIDE DE AFUERZAS USER Y PASSWORD, PODEMOS CAMBIAR EL NOMBRE AQUI
      super({
         usernameField: 'email',
         passwordField: 'password',
      });
   }

   async validate(email, password): Promise<UserDocument> {
      const user = await this.authService.validateUser({ email, password });

      if (!user) throw new UnauthorizedException();

      return user;
   }
}
