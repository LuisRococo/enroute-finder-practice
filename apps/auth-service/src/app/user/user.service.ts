import {
  CreateUserDTO,
  LoginDTO,
  User,
  mockupGeneralUserList,
} from '@finder/definitions';
import { Injectable } from '@nestjs/common';
import { info } from 'console';
import dbEmmulator, {
  UserDbEmmulatorInterface,
} from 'libs/util/src/lib/dbEmmulator';

@Injectable()
export default class UserService {
  getUsers(): User[] {
    return mockupGeneralUserList;
  }

  addUser(user: CreateUserDTO): User {
    return { image_profile: '', _id: '_id1', gallery: [''], ...user };
  }

  findUser(info: LoginDTO): User | undefined {
    const user: User = mockupGeneralUserList.find(
      (user) => user.email === info.email && user.password === info.password
    );

    return user;
  }
}
