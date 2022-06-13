import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutSchema } from '../../models/about';
import PersonalQuestionController from './personalQuestion.controller';
import PersonalQuestionService from './personalQuestion.service';

@Module({
   imports: [
      MongooseModule.forFeature([
         {
            name: 'PersonalQuestion',
            schema: AboutSchema,
         },
      ]),
   ],
   exports: [PersonalQuestionService],
   controllers: [PersonalQuestionController],
   providers: [PersonalQuestionService],
})
export default class PersonalQuestionModule {}
