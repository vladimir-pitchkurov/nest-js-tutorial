import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { TestMiddlewareMiddleware } from "../test-middleware.middleware";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([Users])
    ],
    exports: [TypeOrmModule]
})
export class UsersModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(TestMiddlewareMiddleware)
            .forRoutes('users');
    }
}
