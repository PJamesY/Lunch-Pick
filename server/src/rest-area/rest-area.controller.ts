import { Controller, Get, Query } from '@nestjs/common';
import { RestAreaService } from './rest-area.service';

@Controller('rest-area')
export class RestAreaController {
  constructor(private readonly restAreaService: RestAreaService) {}

  @Get()
  restArea(@Query('id') id: string) {
    // console.log('sdfafsdf');
    return this.restAreaService.getRestArea(id);
  }

  //   search(@Query('year') searchingYear: number) {
  //     return `We are Searching made after: ${searchingYear}`;
  //   }

  @Get('list')
  async getRestAreaList() {
    return this.restAreaService.getRestAreaList();
  }
}
