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

  it('should return card and last visit registered on it', async () => {
    const [card, visit] = await service.getCardWithVisit('AK58GD');

    expect(card).toEqual({
      icon: 'green-monkey',
      number: 'AK58GD',
    });

    expect(visit).toEqual({
      estimatedTime: '2022-02-20T12:00:00.000Z',
      cardNumber: 'AK58GD',
      hospitalId: 'szpital-1',
      queueId: 'kolejka-1',
    });
  });
});
