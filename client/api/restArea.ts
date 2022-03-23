import axios from 'axios';
import { IRestAreaList } from '../types/restArea';

async function getRestArea(code) {
  const response = await axios.get('http://localhost:5000/api/restArea', { params: { id: code } });
  console.log('res', response.data.data);
  const restArea = {
    routeCode: response.data.data.routeCd,
    routeName: response.data.data.routeNm,
    restAreaName: response.data.data.svarNm,
    restAreaCode: response.data.data.svarCd,
    directionCode: response.data.data.gudClssCd,
  };

  //   const restArea = restArea.data.data;

  //   const filteredData: IRestAreaList = restAreaListWithoutGasStation.map((elem) => ({
  //     routeCode: elem.routeCd,
  //     routeName: elem.routeNm,
  //     restAreaName: elem.svarNm,
  //     restAreaCode: elem.svarCd,
  //     directionCode: elem.gudClssCd,
  //   }));

  return restArea;
}

export default getRestArea;
