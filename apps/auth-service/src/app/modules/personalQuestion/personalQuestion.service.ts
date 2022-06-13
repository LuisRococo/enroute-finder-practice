import { CreateManyQuestionsDTO, CreateQuestionDTO } from '@finder/definitions';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PersonalQuestionDocument, PersonalQuestionMongo } from '../../models/personalQuestion';

@Injectable()
export default class PersonalQuestionService {
   constructor(
      @InjectModel('PersonalQuestion')
      private personalQuestionModel: Model<PersonalQuestionDocument>
   ) {}

   async createQuestion(question: CreateQuestionDTO): Promise<PersonalQuestionDocument> {
      const newQuestion = new this.personalQuestionModel(question);
      return newQuestion.save();
   }

   async createQuestions(questions: CreateManyQuestionsDTO): Promise<PersonalQuestionDocument[]> {
      const modifiedQuestions: PersonalQuestionMongo[] = [];
      for (const question of questions) {
         modifiedQuestions.push({
            ...question,
            _id: new Types.ObjectId(),
         });
      }
      const createdQuestions = await this.personalQuestionModel.insertMany(modifiedQuestions);
      return createdQuestions;
   }
}
