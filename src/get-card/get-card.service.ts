import { Injectable } from '@nestjs/common';
import { Card, Visit } from '@prisma/client';
import { ClockService } from '../clock/clock.service';
import { PrismaService } from '../prisma/prisma.service';

type VisitWithoutId = Omit<Visit, 'id'>;
type CardWithActiveVisit = [Card, VisitWithoutId | undefined];

@Injectable()
export class GetCardService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly clock: ClockService,
  ) {}

  async getCardWithActiveVisit(
    cardNumber: string,
  ): Promise<CardWithActiveVisit> {
    const result = await this.prisma.card.findUnique({
      where: { number: cardNumber },
      include: {
        visits: {
          select: {
            estimatedTime: true,
            cardNumber: true,
            hospitalId: true,
            queueId: true,
          },
          where: {
            estimatedTime: {
              gt: this.clock.now(),
            },
          },
          take: 1,
          orderBy: { id: 'desc' },
        },
      },
    });
    const { visits, ...card } = result;

    return [card, visits[0]];
  }
}
