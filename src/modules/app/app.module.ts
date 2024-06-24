import { Module } from '@nestjs/common';
import { AppController } from './v1/adapter/controller/app.controller';
import { AppUseCase } from './v1/usecase/app.usecase';

@Module({
  controllers: [AppController],
  providers: [AppUseCase],
})
export class AppModule {}
