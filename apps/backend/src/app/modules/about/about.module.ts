import { Module } from '@nestjs/common';
import PersonalQuestionModule from '../personalQuestion/personalQuestion.module';
import AboutService from './about.service';

@Module({ imports: [PersonalQuestionModule], providers: [AboutService] })
export default class AboutModule {}
