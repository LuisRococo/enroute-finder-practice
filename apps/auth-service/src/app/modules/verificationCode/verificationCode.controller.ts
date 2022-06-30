import { AuthRoutes, GetVerificationCodeDAO } from '@finder/definitions';
import { Body, Controller, Get, Request, Type, UseGuards } from '@nestjs/common';
import { Types } from 'mongoose';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import VerificationCodeService from './verificationCode.service';

@Controller(AuthRoutes.VERIFICATION_CODE.prefix)
export default class VerificationCodeController {
   constructor(private readonly verificationService: VerificationCodeService) {}

   @Get(AuthRoutes.VERIFICATION_CODE.GET.path)
   @UseGuards(JwtAuthGuard)
   async getVerificationCode(@Request() req): Promise<GetVerificationCodeDAO> {
      const userId: Types.ObjectId = new Types.ObjectId(req.user.sub);
      return await this.verificationService.getVerificationCode(userId);
   }
}
