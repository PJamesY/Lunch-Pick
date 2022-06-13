import axios from 'axios';
import dotenv from 'dotenv';
import { Axios } from './request';
dotenv.config();

interface IRestArea {
  routeCode: string;
  routeName: string;
  restAreaName: string;
  restAreaCode: string;
  directionCode: string;
}

class RestArea extends Axios {
  async get(code: string): Promise<IRestArea> {
    const response = await this.service.get('/rest-area', { params: { id: code } });
    console.log(response);
    const restArea = {
      routeCode: response.routeCd,
      routeName: response.routeNm,
      restAreaName: response.svarNm,
      restAreaCode: response.svarCd,
      directionCode: response.gudClssCd,
    };

    return restArea;
  }
}

export default new RestArea();
