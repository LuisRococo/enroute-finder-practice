export interface UserDbEmmulatorInterface {
  username: string;
  password: string;
}

const users: UserDbEmmulatorInterface[] = [
  {
    username: 'root',
    password: 'root',
  },
];

function getUsers(): UserDbEmmulatorInterface[] {
  return users;
}

function getUser(username: string): UserDbEmmulatorInterface | undefined {
  return users.find((user) => user.username === username);
}

function addUser(newUser: UserDbEmmulatorInterface) {
  users.push(newUser);
}

const dbEmmulator = { getUsers, getUser, addUser };

export default dbEmmulator;
