import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { FirstService } from "../../services/first/first.service";
import { Response } from "express";


// Docs:   https://docs.nestjs.com/controllers
@Controller('first-controller')
export class FirstControllerController {
    constructor(private readonly firstService: FirstService) {
    }

    // Static files:  http://localhost:3000/castle.jpeg


    // [dev] GET http://localhost:3000/first-controller/json
    @Get('json')
    getJson(): Object {
        return this.firstService.getJson();
    }

    // [dev] GET http://localhost:3000/first-controller/string
    @Get('string')
    getString(): string {
        return `Some string content`
    }

    // [dev] GET http://localhost:3000/first-controller/html/dynamic%20param/second%20param
    @Get('html/:message?/:second?')
    @Render('index')
    getHtml(
        @Res() res: Response,
        @Param('message') message = 'Some Default Message',
        @Param('second') second = 'Second Default Param'
    ) {
        return {
            message: message,
            second: second
        };
    }

    //  @Controller, @Get, @Query, @Post, @Body, @Put, @Param, @Delete

}
