import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetCardService } from './get-card/get-card.service';
import { GetCardController } from './get-card/get-card.controller';
import { PrismaService } from './prisma/prisma.service';
import { ClockService } from './clock/clock.service';

@Module({
  imports: [],
  controllers: [AppController, GetCardController],
  providers: [AppService, GetCardService, PrismaService, ClockService],
})
export class AppModule {}
