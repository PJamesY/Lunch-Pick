import axios from 'axios';
import { IRestAreaList } from '../types/restArea';

async function getRestAreaList() {
  const restAreaList = await axios.get('http://localhost:5000/rest-area/list');

  const restAreaListWithoutGasStation = restAreaList.data.data.filter(
    (elem: any) => elem.svarNm.slice(-3) === '휴게소',
  );

  const filteredData: IRestAreaList = restAreaListWithoutGasStation.map((elem: any) => ({
    routeCode: elem.routeCd,
    routeName: elem.routeNm,
    restAreaName: elem.svarNm,
    restAreaCode: elem.svarCd,
    directionCode: elem.gudClssCd,
  }));

  return filteredData;
}

export default getRestAreaList;
