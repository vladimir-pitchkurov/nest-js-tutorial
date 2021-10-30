import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from './app.module';
import { join } from 'path';


async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setBaseViewsDir(join(__dirname, '../src/', 'views'));
    app.useStaticAssets(join(__dirname, '../src/', 'public'));
    app.setViewEngine('hbs');

    await app.listen(3000);
}

bootstrap();
