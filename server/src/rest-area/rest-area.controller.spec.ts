import { Test, TestingModule } from '@nestjs/testing';
import { RestAreaController } from './rest-area.controller';
import { RestAreaService } from './rest-area.service';

describe('RestAreaController', () => {
  let controller: RestAreaController;
  let service: RestAreaService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [RestAreaController],
    // }).compile();

    // controller = module.get<RestAreaController>(RestAreaController);
    service = new RestAreaService();
    controller = new RestAreaController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('get area list', () => {
    it('shoule return rest area list', async () => {
      const result = {
        count: 2,
        list: [
          {
            routeCd: '0010',
            svarAddr: '경북 경주시 건천읍 경부고속도로 77',
            routeNm: '경부선',
            svarCd: '000485',
            svarNm: '건천(부산)주유소',
            hdqrCd: '600000',
            hdqrNm: '대구경북본부',
            mtnofCd: '610200',
            mtnofNm: '대구',
            svarGsstClssCd: '1',
            svarGsstClssNm: '주유소',
            gudClssCd: '1',
            gudClssNm: '하행',
            pstnoCd: '780900',
            cocrPrkgTrcn: '0',
            fscarPrkgTrcn: '0',
            dspnPrkgTrcn: '0',
            bsopAdtnlFcltCd: 'B00200',
            rprsTelNo: '0547514600',
          },
          {
            routeCd: '0010',
            svarAddr: '경북 경주시 건천읍 방내리 14',
            routeNm: '경부선',
            svarCd: '000054',
            svarNm: '건천(부산)휴게소',
            hdqrCd: '600000',
            hdqrNm: '대구경북본부',
            mtnofCd: '610200',
            mtnofNm: '대구',
            svarGsstClssCd: '0',
            svarGsstClssNm: '휴게소',
            gudClssCd: '1',
            gudClssNm: '하행',
            pstnoCd: '780900',
            cocrPrkgTrcn: '119',
            fscarPrkgTrcn: '25',
            dspnPrkgTrcn: '147',
            bsopAdtnlFcltCd: 'A00078',
            rprsTelNo: '0547517810',
          },
        ],
      };

      jest
        .spyOn(service, 'getRestAreaList')
        .mockImplementation(async () => result);

      expect(await controller.getRestAreaList()).toBe(result);
    });
  });
});
