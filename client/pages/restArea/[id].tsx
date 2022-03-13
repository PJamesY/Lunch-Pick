import React, { useEffect } from 'react';
import getRestArea from '../../api/restArea';
import getRestAreaFood from '../../api/restAreaFood';
import FoodCard from '../../components/fodCard';

export interface FoodProps {
  restAreaName: string;
  foodList: any[];
}

const Food: React.FC<FoodProps> = ({ restAreaName, foodList }) => {
  return (
    <>
      <h2>{restAreaName}</h2>

      <ul className="food-list">
        {foodList?.map((food) => (
          <FoodCard
            key={food.foodName}
            foodName={food.foodName}
            price={food.price}
            isRecommend={food.isRecommend}
            isBest={food.isBest}
            isPremium={food.isPremium}
          />
        ))}
      </ul>

      <style jsx>
        {`
          h2 {
            text-align: center;
            position: fixed;
            z-index: 2;
            background-color: red;
            width: 100%;
            top: 0;
          }
          .food-list {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 1ch;
            column-gap: 1ch;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getRestAreaFood(params.id);
  const restArea = await getRestArea(params.id);

  return {
    props: {
      restAreaName: restArea.restAreaName,
      foodList: postData,
    },
  };
}

export default Food;
