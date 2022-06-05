import { Injectable } from '@nestjs/common';
import dbEmmulator, {
  UserDbEmmulatorInterface,
} from 'libs/util/src/lib/dbEmmulator';

@Injectable()
export default class UserService {
  getAllUsers(): UserDbEmmulatorInterface[] {
    return dbEmmulator.getUsers();
  }

  getUser(username: string): UserDbEmmulatorInterface | undefined {
    return dbEmmulator.getUser(username);
  }

  addUser(username: string, password: string): void {
    const newUser: UserDbEmmulatorInterface = { username, password };
    dbEmmulator.addUser(newUser);
  }
}
