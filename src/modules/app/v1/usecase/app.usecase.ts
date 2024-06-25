import { Injectable } from '@nestjs/common';

@Injectable()
export class AppUseCase {
  getHello(): string {
    return 'Hello World!';
  }
}
