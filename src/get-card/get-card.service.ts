import { Injectable } from '@nestjs/common';
import { Card, Visit } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

type CardWithRegisteredVisit = [Card, Visit | undefined];

@Injectable()
export class GetCardService {
  constructor(private readonly prisma: PrismaService) {}

  async getCardWithVisit(cardNumber: string): Promise<CardWithRegisteredVisit> {
    console.log(cardNumber);
    const result = await this.prisma.card.findUnique({
      where: { number: cardNumber },
      include: {
        visits: {
          take: 1,
          orderBy: { id: 'desc' },
        },
      },
    });

    return [result, result.visits[0]];
  }
}
