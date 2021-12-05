import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./CreateUserDTO";

/**
 * Doc:  https://docs.nestjs.com/cli/usages#nest-generate
 * Create CLI command: nest g controller users
 * **/

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get('test')
    test(): string {
        return 'Test users controller';
    }

    /**
     *  Get ALL Users List
     *
     * */
    @Get('all')
    all() {
        return this.usersService.findAll();
    }

    /**
     * Example of Valid data:
     * {
     *  "first_name":"Vasya",
     *  "last_name":"Vasya",
     *  "email":"vasya@mail.com",
     *  "password":"111111"
     * }
     * */
    @Post('create')
    create(@Body() body: CreateUserDto) {
        return this.usersService.saveUser(body);
    }
}
