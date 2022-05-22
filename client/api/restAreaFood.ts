import axios from 'axios';
import dotenv from 'dotenv';
import { IFood } from '../types/food';
dotenv.config();

async function getRestAreaFood(code: string) {
  const foodList = await axios.get('http://localhost:5000/rest-area/food', { params: { id: code } });
  if (foodList.data.length !== 0) {
    const filteredFoodList = foodList.data.map((food: IFood) => ({
      foodName: food.foodNm,
      isRecommend: food.recommendyn,
      isBest: food.bestfoodyn,
      isPremium: food.premiumyn,
      price: food.foodCost,
      //   material: food.foodMaterial?.split('').map((mat) => mat.trim()),
    }));

    return filteredFoodList;
  }

  return [];
}

export default getRestAreaFood;
