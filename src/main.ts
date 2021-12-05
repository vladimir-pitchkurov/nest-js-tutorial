import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from "@nestjs/common";

/**
 *  Start App In development mode:  npm run start:dev
 * */
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setBaseViewsDir(join(__dirname, '../src/', 'views'));
    app.useStaticAssets(join(__dirname, '../src/', 'public'));
    app.setViewEngine('hbs');
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(3000);
}

bootstrap();
