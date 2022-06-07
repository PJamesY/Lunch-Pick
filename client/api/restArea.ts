import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function getRestArea(code: string) {
  const response = await axios.get(`${process.env.API_BACKEND}/rest-area`, { params: { id: code } });
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
