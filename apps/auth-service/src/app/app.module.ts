import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AuthModule from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import PersonalQuestionModule from './modules/personalQuestion/personalQuestion.module';
import AboutModule from './modules/about/about.module';
import { transporterConfig } from './utils/ses';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import path = require('path');
import { VerificationCodeModule } from './modules/verificationCode/verificationCode.module';

@Module({
   imports: [
      MongooseModule.forRoot(
         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cdbc3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      ),
      MailerModule.forRoot({
         transport: transporterConfig,
         template: {
            dir: path.resolve(process.cwd(), './apps/auth-service/src/app/templates'),
            adapter: new HandlebarsAdapter(),
            options: {
               strict: true,
            },
         },
      }),
      AboutModule,
      AuthModule,
      UserModule,
      VerificationCodeModule,
      PersonalQuestionModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
