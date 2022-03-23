import axios from 'axios';

async function getRestAreaFood(code) {
  const foodList = await axios.get('http://localhost:5000/api/food', { params: { id: code } });

  if (foodList.data.data.length !== 0) {
    const filteredFoodList = foodList.data.data.map((food) => ({
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
