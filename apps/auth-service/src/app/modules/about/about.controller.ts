import { CreateAboutDTO } from '@finder/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import { AboutDocument } from '../../models/about';
import AboutService from './about.service';

@Controller('about')
export default class AboutController {
   constructor(private readonly aboutService: AboutService) {}

   @Post()
   async createAbout(@Body() aboutDTO: CreateAboutDTO): Promise<AboutDocument> {
      return this.aboutService.createAbout(aboutDTO);
   }
}
