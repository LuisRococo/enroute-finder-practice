import { AuthRoutes, CreateAboutDTO } from '@finder/definitions';
import { Body, Controller, Post } from '@nestjs/common';
import { AboutDocument } from '../../models/about';
import AboutService from './about.service';

@Controller(AuthRoutes.ABOUT.prefix)
export default class AboutController {
   constructor(private readonly aboutService: AboutService) {}

   @Post(AuthRoutes.ABOUT.CREATE.path)
   async createAbout(@Body() aboutDTO: CreateAboutDTO): Promise<AboutDocument> {
      return this.aboutService.createAbout(aboutDTO);
   }
}
