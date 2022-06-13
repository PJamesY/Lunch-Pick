import axios from 'axios';
import { Axios } from './request';
import { IExtractedRestArea, IRestArea } from '../types/restArea';

class RestArea extends Axios {
  async get(code: string): Promise<IExtractedRestArea> {
    const response = await this.service.get('/rest-area', { params: { id: code } });
    const restArea = {
      routeCode: response.routeCd,
      routeName: response.routeNm,
      restAreaName: response.svarNm,
      restAreaCode: response.svarCd,
      directionCode: response.gudClssCd,
    };

    return restArea;
  }

  async getList(): Promise<IExtractedRestArea[]> {
    const response = await this.service.get('/rest-area/list');
    const onlyRestArea = response.list
      .filter((elem: IRestArea) => elem.svarNm.slice(-3) === '휴게소')
      .map((elem: IRestArea) => ({
        routeCode: elem.routeCd,
        routeName: elem.routeNm,
        restAreaName: elem.svarNm,
        restAreaCode: elem.svarCd,
        directionCode: elem.gudClssCd,
      }));
    return onlyRestArea;
  }
}

export default new RestArea();
