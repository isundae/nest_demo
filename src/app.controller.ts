import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getGoodBye() {
    return this.appService.getGoodBye('bye');
  }

  @Get('/json')
  getJson() {
    return this.appService.getJson();
  }

  @Get('/title')
  getTitle() {
    return this.appService.getTitle();
  }
}
