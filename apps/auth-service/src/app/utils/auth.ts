import { createHmac, randomInt } from 'crypto';

export function hashPassword(password: string): string {
   const sha512Hasher = createHmac('sha512', process.env.PRIVATE_KEY);
   const hashPassword: string = sha512Hasher.update(password).digest('base64');
   return hashPassword;
}

export function generateVerificationCode(): string {
   const validCharacters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   let code = '';
   const codeLenght: number = 7;

   for (let i = 0; i < codeLenght; i++) {
      const rndCharacter = validCharacters[randomInt(0, validCharacters.length)];
      code += rndCharacter;
   }

   return code;
}
