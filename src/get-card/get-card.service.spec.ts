import { Test, TestingModule } from '@nestjs/testing';
import { GetCardService } from './get-card.service';

describe('GetCardService', () => {
  let service: GetCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCardService],
    }).compile();

    service = module.get<GetCardService>(GetCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
