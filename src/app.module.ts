import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WowController } from './wow/wow.contrller';
import { WowService } from './wow/wow.service';

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: "COMMUNICATION",
          transport: Transport.TCP
        }
      ]
    )
  ],
  controllers: [AppController, WowController],
  providers: [AppService, WowService],
})
export class AppModule { }
