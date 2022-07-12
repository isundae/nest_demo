import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly db: PrismaService) {}

  getHello(): string {
    return 'Hello World!1234';
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
    const data = await this.db.todo.findFirst({});
    this.db.todo;
    return data.title;
  }
}
