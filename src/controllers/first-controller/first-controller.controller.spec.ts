import { Test, TestingModule } from '@nestjs/testing';
import { FirstControllerController } from './first-controller.controller';

describe('FirstControllerController', () => {
  let controller: FirstControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstControllerController],
    }).compile();

    controller = module.get<FirstControllerController>(FirstControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
