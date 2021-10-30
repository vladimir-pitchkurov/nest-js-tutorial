import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstService {

    getJson():Object{
        return {
            "prop": "Value",
            "prop2": "Val2"
        };
    }
}
