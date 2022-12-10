import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WowController } from './wow/wow.contrller';
import { WowService } from './wow/wow.service';

@Module({
  imports: [],
  controllers: [AppController, WowController],
  providers: [AppService, WowService],
})
export class AppModule { }
