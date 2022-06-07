import axios from 'axios';
import { IExtractedRestArea, IRestArea } from '../types/restArea';

async function getRestAreaList() {
  const restAreaList = await axios.get(`${process.env.API_BACKEND}/rest-area/list`);
  const restAreaListWithoutGasStation = restAreaList.data.list.filter(
    (elem: IRestArea) => elem.svarNm.slice(-3) === '휴게소',
  );

  const filteredData: IExtractedRestArea = restAreaListWithoutGasStation.map((elem: IRestArea) => ({
    routeCode: elem.routeCd,
    routeName: elem.routeNm,
    restAreaName: elem.svarNm,
    restAreaCode: elem.svarCd,
    directionCode: elem.gudClssCd,
  }));

  return filteredData;
}

export default getRestAreaList;
