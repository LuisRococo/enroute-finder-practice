import { CreateQuestionDTO } from '@finder/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import { PersonalQuestionMongo } from '../../models/personalQuestion';
import PersonalQuestionService from './personalQuestion.service';

@Controller('personalQuestion')
export default class PersonalQuestionController {
   constructor(private readonly personalQuestionService: PersonalQuestionService) {}

   @Post()
   createQuestion(@Body() personaQuestionDTO: CreateQuestionDTO): Promise<PersonalQuestionMongo> {
      return this.personalQuestionService.createQuestion(personaQuestionDTO);
   }
}
