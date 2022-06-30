import { AuthRoutes, CreateQuestionDTO } from '@finder/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import { PersonalQuestionMongo } from '../../models/personalQuestion';
import PersonalQuestionService from './personalQuestion.service';

@Controller(AuthRoutes.PERSONAL_QUESTION.prefix)
export default class PersonalQuestionController {
   constructor(private readonly personalQuestionService: PersonalQuestionService) {}

   @Post(AuthRoutes.PERSONAL_QUESTION.CREATE.path)
   createQuestion(@Body() personaQuestionDTO: CreateQuestionDTO): Promise<PersonalQuestionMongo> {
      return this.personalQuestionService.createQuestion(personaQuestionDTO);
   }

   @Post(AuthRoutes.PERSONAL_QUESTION.CREATE_MANY.path)
   createQuestions(
      @Body() personalQuestionsDTO: CreateQuestionDTO[]
   ): Promise<PersonalQuestionMongo[]> {
      return this.personalQuestionService.createQuestions(personalQuestionsDTO);
   }
}
