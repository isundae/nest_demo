import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TmpMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.url);
    next();
  }
}
