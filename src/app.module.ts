import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetCardService } from './get-card/get-card.service';
import { GetCardController } from './get-card/get-card.controller';

@Module({
  imports: [],
  controllers: [AppController, GetCardController],
  providers: [AppService, GetCardService],
})
export class AppModule {}
