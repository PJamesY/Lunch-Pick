import { Injectable } from '@nestjs/common';
import axios from 'axios';
// const axios = require('axios');

const REST_AREA_LIST_URL =
  'http://data.ex.co.kr/openapi/restinfo/hiwaySvarInfoList';

const BEST_FOOD_API_URL =
  'http://data.ex.co.kr/openapi/restinfo/restBestfoodList';

const REST_AREA_LIST_LOC =
  'http://data.ex.co.kr/openapi/locationinfo/locationinfoRest';

@Injectable()
export class RestAreaService {
  async getRestAreaList(): Promise<any> {
    try {
      const response = await axios.get(
        `${REST_AREA_LIST_URL}?${encodeURIComponent('key')}=${
          process.env.REST_AREA_LIST_API_KEY
        }&${encodeURIComponent('type')}=json`,
      );
      return response.data;
    } catch (e) {
      // error
      console.log('eeee', e);
    }
  }
}
