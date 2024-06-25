import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppUseCase } from '../../usecase/app.usecase';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppUseCase],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHealth()).toBe('OK');
    });
  });
});
