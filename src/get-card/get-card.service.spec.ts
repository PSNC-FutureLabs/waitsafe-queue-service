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

  it('should return card and assigned visit', async () => {
    const [card, visit] = await service.getCardWithVisit('AK58GD');

    expect(card).toEqual({
      icon: 'green-monkey',
      number: 'AK58GD',
      hospitalId: 'szpital-1',
      links: {
        self: '/cards/AK58GD',
        visit: '/cards/AK58GD/visit',
      },
    });

    expect(visit).toEqual({
      estimatedTime: '2022-02-20T12:00:00.000Z',
      links: {
        self: '/cards/AK58GD/visit',
        card: '/cards/AK58GD',
        queue: '/hospital/szpital-1/queues/kolejka-1',
      },
    });
  });
});
