import { Test, TestingModule } from '@nestjs/testing';
import { CardScanProcessorController } from './card-scan-processor.controller';

describe('CardScanProcessorController', () => {
  let controller: CardScanProcessorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardScanProcessorController],
    }).compile();

    controller = module.get<CardScanProcessorController>(
      CardScanProcessorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
