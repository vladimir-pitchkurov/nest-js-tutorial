import { Injectable, NestMiddleware } from '@nestjs/common';

// CLI:  nest generate middleware TestMiddleware
@Injectable()
export class TestMiddlewareMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        // Here we can check any data... Authorization, request data, some other info...
        console.log('Request body: ', req.body)
        next();
    }
}
