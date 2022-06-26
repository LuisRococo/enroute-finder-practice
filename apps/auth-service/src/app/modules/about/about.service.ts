import { CreateAboutDTO } from '@finder/definitions';
import { Injectable, Module } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { AboutDocument, AboutSchema } from '../../models/about';
import { PersonalQuestionDocument, PersonalQuestionMongo } from '../../models/personalQuestion';
import PersonalQuestionService from '../personalQuestion/personalQuestion.service';

@Injectable()
export default class AboutService {
   constructor(
      private readonly personalQuestionService: PersonalQuestionService,
      @InjectModel('About') private aboutModel: Model<AboutDocument>
   ) {}

   async createAbout(aboutDTO: CreateAboutDTO): Promise<AboutDocument> {
      const createdQuestions: PersonalQuestionDocument[] =
         await this.personalQuestionService.createQuestions(aboutDTO.personal_questions);
      const createdAbout: AboutDocument = await this.aboutModel.create({
         ...aboutDTO,
         _id: new Types.ObjectId(),
         personal_questions: createdQuestions.map((question) => question._id),
      });

      return createdAbout;
   }

   async deleteAbout(id_about: Types.ObjectId): Promise<void> {
      const aboutDocument: AboutDocument = await this.aboutModel.findById(id_about);
      const questions: PersonalQuestionDocument[] = aboutDocument.personal_questions;

      for (let index = 0; index < questions.length; index++) {
         const question = questions[index];
         await this.personalQuestionService.deleteQuestion(question._id);
      }

      await this.aboutModel.findByIdAndDelete(id_about);
   }
}
