import { Controller, Get } from '@nestjs/common';
import { WowService } from './wow.service';

@Controller("/hello")
export class WowController {
  constructor(private readonly appService: WowService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
