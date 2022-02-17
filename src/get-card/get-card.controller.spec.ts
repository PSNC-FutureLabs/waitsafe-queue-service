import { Test, TestingModule } from '@nestjs/testing';
import { GetCardController } from './get-card.controller';

describe('GetCardController', () => {
  let controller: GetCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCardController],
    }).compile();

    controller = module.get<GetCardController>(GetCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
