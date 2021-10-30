import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstControllerController } from './controllers/first-controller/first-controller.controller';
import { FirstService } from './services/first/first.service';

@Module({
    imports: [],
    controllers: [AppController, FirstControllerController],
    providers: [AppService, FirstService],
})
export class AppModule {
}
