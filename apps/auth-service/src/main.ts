/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AuthRoutes } from '@finder/definitions';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.enableCors();
   const globalPrefix = AuthRoutes.prefix;
   app.setGlobalPrefix(globalPrefix);
   const port = process.env.PORT || 3333;
   await app.listen(port);
   Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
