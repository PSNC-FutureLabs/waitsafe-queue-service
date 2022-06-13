import { Test, TestingModule } from '@nestjs/testing';
import { ClockService } from '../clock/clock.service';
import { PrismaService } from '../prisma/prisma.service';
import { GetCardService } from './get-card.service';

describe('GetCardService', () => {
  let service: GetCardService;
  let clock: ClockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCardService, PrismaService, ClockService],
    }).compile();

    service = module.get<GetCardService>(GetCardService);
    clock = module.get<ClockService>(ClockService);
  });

  it('should return card and active visit registered on it', async () => {
    jest
      .spyOn(clock, 'now')
      .mockImplementation(() => new Date('1996-12-19T00:00:00.000Z'));

    const [card, visit] = await service.getCardWithActiveVisit('AK58GD');

    expect(card).toEqual({
      icon: 'green-monkey',
      number: 'AK58GD',
    });
    expect(visit).toEqual({
      estimatedTime: new Date('1996-12-19T10:15:00.000Z'),
      cardNumber: 'AK58GD',
      hospitalId: 'szpital-1',
      queueId: 'kolejka-1',
    });
  });
});
