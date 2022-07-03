import { Injectable } from '@nestjs/common';
import db from '../prisma/test';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!123';
  }

  getGoodBye(msg: string) {
    return msg;
  }

  getJson() {
    return {
      name: 'zhangsan',
      age: 12,
    };
  }

  async getTitle() {
    const title = await db.todo.findFirst({});
    return { title };
  }
}
