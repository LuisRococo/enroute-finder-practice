import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VerificationSchema } from '../../models/verification';
import { UserModule } from '../user/user.module';
import VerificationCodeController from './verificationCode.controller';
import VerificationCodeService from './verificationCode.service';

@Module({
   providers: [VerificationCodeService],
   controllers: [VerificationCodeController],
   imports: [
      UserModule,
      MongooseModule.forFeature([{ name: 'Verification', schema: VerificationSchema }]),
   ],
})
export class VerificationCodeModule {}
