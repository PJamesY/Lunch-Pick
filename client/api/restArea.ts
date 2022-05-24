import axios from 'axios';
import { IRestAreaList } from '../types/restArea';

async function getRestArea(code: string) {
  const response = await axios.get('http://localhost:5000/rest-area', { params: { id: code } });
  const restArea = {
    routeCode: response.data.routeCd,
    routeName: response.data.routeNm,
    restAreaName: response.data.svarNm,
    restAreaCode: response.data.svarCd,
    directionCode: response.data.gudClssCd,
  };

  return restArea;
}

export default getRestArea;
