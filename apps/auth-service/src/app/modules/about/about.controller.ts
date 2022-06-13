import { CreateAboutDTO } from '@finder/definitions';
import { Controller, Post } from '@nestjs/common';
import { AboutDocument } from '../../models/about';
import AboutService from './about.service';

@Controller('/bout')
export default class AboutController {
   constructor(private readonly aboutService: AboutService) {}

   @Post()
   async createAbout(aboutDTO: CreateAboutDTO): Promise<AboutDocument> {
      return await this.aboutService.createAbout(aboutDTO);
   }
}
