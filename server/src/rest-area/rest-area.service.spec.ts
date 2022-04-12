import { Test, TestingModule } from '@nestjs/testing';
import { RestAreaService } from './rest-area.service';

describe('RestAreaService', () => {
  let service: RestAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestAreaService],
    }).compile();

    service = module.get<RestAreaService>(RestAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
