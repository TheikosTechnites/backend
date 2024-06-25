import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  constructor() {}

  @Get('/health')
  getHealth(): string {
    return 'OK';
  }
}
