import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import AuthModule from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import PersonalQuestionModule from './modules/personalQuestion/personalQuestion.module';
import AboutModule from './modules/about/about.module';

@Module({
   imports: [
      MongooseModule.forRoot(
         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cdbc3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      ),
      AboutModule,
      AuthModule,
      UserModule,
      PersonalQuestionModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
