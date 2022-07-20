import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CardScanProcessorController } from './card-scan-processor/card-scan-processor.controller';
import { ClockService } from './clock/clock.service';
import { GetCardController } from './get-card/get-card.controller';
import { GetCardService } from './get-card/get-card.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ConfigModule],
  controllers: [AppController, GetCardController, CardScanProcessorController],
  providers: [GetCardService, PrismaService, ClockService],
})
export class AppModule {}
