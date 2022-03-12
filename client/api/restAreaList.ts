import axios from 'axios';
import { IRestAreaList } from '../types/restArea';

async function getRestAreaList() {
  const restAreaList = await axios.get('http://localhost:5000/api/restAreaList');

  const restAreaListWithoutGasStation = restAreaList.data.data.filter((elem) => elem.svarNm.slice(-3) === '휴게소');

  const filteredData: IRestAreaList = restAreaListWithoutGasStation.map((elem) => ({
    routeCode: elem.routeCd,
    routeName: elem.routeNm,
    restAreaName: elem.svarNm,
    restAreaCode: elem.svarCd,
    directionCode: elem.gudClssCd,
  }));

  return filteredData;
}

export default getRestAreaList;
