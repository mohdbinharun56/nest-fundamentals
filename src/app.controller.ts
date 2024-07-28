import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// This is a controller file that can be containing the route. and also handle the response-request in between web browser and server.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
