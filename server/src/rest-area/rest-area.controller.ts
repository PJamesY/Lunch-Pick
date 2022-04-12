import { Controller, Get, Query } from '@nestjs/common';
import { RestAreaService } from './rest-area.service';

@Controller('rest-area')
export class RestAreaController {
  constructor(private readonly restAreaService: RestAreaService) {}

  @Get()
  restArea(@Query('id') id: string) {
    return this.restAreaService.getRestArea(id);
  }

  @Get('list')
  async getRestAreaList() {
    return this.restAreaService.getRestAreaList();
  }

  @Get('food')
  food(@Query('id') id: string) {
    return this.restAreaService.getFood(id);
  }
}
