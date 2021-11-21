import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstControllerController } from './controllers/first-controller/first-controller.controller';
import { FirstService } from './services/first/first.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection, getConnectionOptions } from "typeorm";
import { UsersService } from "./users/users.service";

// Database config doc: https://docs.nestjs.com/techniques/database

/***
 * WARNING
 * Setting synchronize: true
 *     shouldn't be used in production - otherwise you can lose production data.
 ***/


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () =>
                Object.assign(await getConnectionOptions(), {
                    autoLoadEntities: true,
                    // synchronize: true,
                    entities: [
                        "./entities/*{.ts,.js}"
                        // "dist/**/*.entity{ .ts,.js}"
                    ],
                    migrations: [
                        "./migration/*{.ts,.js}",
                    ]
                }),
        }),
        UsersModule,
    ],
    controllers: [AppController, FirstControllerController],
    providers: [AppService, FirstService, UsersService],
})
export class AppModule {
    constructor(private connection: Connection) {
    }
}
