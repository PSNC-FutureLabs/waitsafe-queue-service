import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

const ICONS = ['green-monkey', 'blue-whale', 'red-ant'];
const _15_MINUTES = 1000 * 60 * 15;
const QUEUE_ID = 'kolejka-1';
const HOSPITAL_ID = 'szpital-1';

// {‘cardId’: ‘8083’, ‘readerId’: ‘gabinet-1’, ‘timestamp’: ‘2022-07-07T17:25:53+00:00’}
type RegisterVisitScan = {
  cardId: string;
  readerId: string;
  timestamp: string;
};

function isRegisterVisitScan(body?: any): body is RegisterVisitScan {
  return body && 'cardId' in body && 'readerId' in body && 'timestamp' in body;
}

@Controller('card-scan-processor')
export class CardScanProcessorController {
  constructor(private readonly prisma: PrismaService) {}

  @MessagePattern()
  async processCardScan(@Ctx() context: RmqContext) {
    const body = context.getMessage().content.toString('utf8');
    if (isRegisterVisitScan(body)) {
      await this.prisma.scan.create({
        data: {
          body: JSON.stringify(body),
          updatedAt: new Date(body.timestamp),
        },
      });
      const lastVisit = await this.prisma.visit.findFirst({
        where: { queueId: QUEUE_ID, hospitalId: HOSPITAL_ID },
        orderBy: { estimatedTime: 'desc' },
      });
      await this.prisma.card.upsert({
        where: { number: body.cardId },
        update: {},
        create: {
          number: body.cardId,
          icon: ICONS.at(Math.floor(Math.random() * 2)),
          visits: {
            create: {
              estimatedTime: new Date(
                lastVisit.estimatedTime.getTime() + _15_MINUTES,
              ),
              queueId: QUEUE_ID,
              hospitalId: HOSPITAL_ID,
            },
          },
        },
      });
    }

    context.getChannelRef().ack(context.getMessage());
  }
}
