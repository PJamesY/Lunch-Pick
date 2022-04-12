import { Controller, Get } from '@nestjs/common';
import { RestAreaService } from './rest-area.service';

@Controller('rest-area')
export class RestAreaController {
  constructor(private readonly restAreaService: RestAreaService) {}

  @Get('list')
  async getRestAreaList() {
    return this.restAreaService.getRestAreaList();
  }
}
