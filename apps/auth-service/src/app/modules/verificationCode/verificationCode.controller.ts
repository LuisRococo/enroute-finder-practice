import { GetVerificationCodeDAO } from '@finder/definitions';
import { Body, Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import VerificationCodeService from './verificationCode.service';

@Controller('verification')
export default class VerificationCodeController {
   constructor(private readonly verificationService: VerificationCodeService) {}

   @Get()
   @UseGuards(JwtAuthGuard)
   async getVerificationCode(@Request() req): Promise<GetVerificationCodeDAO> {
      const userId: string = req.user.user_id;
      return await this.verificationService.getVerificationCode(userId);
   }
}
