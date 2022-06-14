import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutSchema } from '../../models/about';
import PersonalQuestionModule from '../personalQuestion/personalQuestion.module';
import AboutController from './about.controller';
import AboutService from './about.service';

@Module({
   imports: [PersonalQuestionModule, MongooseModule.forFeature([{ name: 'About', schema: AboutSchema }])],
   providers: [AboutService],
   controllers: [AboutController],
   exports: [AboutService],
})
export default class AboutModule {}
