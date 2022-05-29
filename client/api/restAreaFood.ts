import axios from 'axios';
import dotenv from 'dotenv';
import { IFood } from '../types/food';
dotenv.config();

async function getRestAreaFood(code: string) {
  const foodList = await axios.get(`${process.env.API_BACKEND}/rest-area/food`, { params: { id: code } });
  if (foodList.data.length !== 0) {
    const filteredFoodList = foodList.data.map((food: IFood) => ({
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

export default getRestAreaFood;
