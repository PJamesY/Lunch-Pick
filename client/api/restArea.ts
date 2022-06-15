import axios from 'axios';
import { Axios } from './request';
import { IExtractedRestArea, IRestArea, IExtractedFood, IFood } from '../types/restArea';

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

  async getFood(code: string): Promise<IExtractedFood[] | []> {
    const foodList = await this.service.get('/rest-area/food', { params: { id: code } });
    if (foodList.length !== 0) {
      const filteredFoodList = foodList.map((food: IFood) => ({
        foodName: food.foodNm,
        isRecommend: food.recommendyn,
        isBest: food.bestfoodyn,
        isPremium: food.premiumyn,
        price: food.foodCost,
      }));
      return filteredFoodList;
    }
    return [];
  }
}

export default new RestArea();
