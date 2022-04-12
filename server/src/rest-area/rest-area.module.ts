import { Module } from '@nestjs/common';
import { RestAreaController } from './rest-area.controller';
import { RestAreaService } from './rest-area.service';

@Module({
  controllers: [RestAreaController],
  providers: [RestAreaService]
})
export class RestAreaModule {}
