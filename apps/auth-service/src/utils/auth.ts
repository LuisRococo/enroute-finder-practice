import { createHmac } from 'crypto';

export function hashPassword(password: string): string {
   const sha512Hasher = createHmac('sha512', process.env.PRIVATE_KEY);
   const hashPassword: string = sha512Hasher.update(password).digest('base64');
   return hashPassword;
}
