import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Controller('card-scan-processor')
export class CardScanProcessorController {
  constructor(private readonly prisma: PrismaService) {}

  @MessagePattern()
  async getNotifications(@Ctx() context: RmqContext) {
    await this.prisma.scan.create({
      data: {
        body: context.getMessage().content.toString('utf8'),
      },
    });
    context.getChannelRef().ack(context.getMessage());
  }
}
