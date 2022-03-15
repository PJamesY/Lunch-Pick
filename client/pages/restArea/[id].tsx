import React, { useEffect, useState } from 'react';
import getRestArea from '../../api/restArea';
import getRestAreaFood from '../../api/restAreaFood';
import FoodCard from '../../components/fodCard';
import useSWR from 'swr';
import axios from 'axios';

enum Sort {
  Default,
  Descending,
  Ascending,
}

export interface FoodProps {
  restAreaName: string;
  foodList: any[];
}

const Food: React.FC<FoodProps> = ({ restAreaName, foodList }) => {
  const [datas, setData] = useState(foodList);

  const sorting = (order) => {
    const sortedData = [...datas];

    if (order === Sort.Descending) {
      sortedData.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    } else if (order === Sort.Ascending) {
      sortedData.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }

    setData(sortedData);
  };

  useEffect(() => {
    setData(foodList);
  }, [foodList]);

  return (
    <>
      <h2>{restAreaName}</h2>
      <div className="price-sorting">
        <span>가격</span>
        <button
          onClick={() => {
            sorting(Sort.Descending);
          }}
        >
          내림차순
        </button>
        <button
          onClick={() => {
            sorting(Sort.Ascending);
          }}
        >
          오름차순
        </button>
      </div>

      <ul className="food-list">
        {datas?.map((food) => (
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
          .price-sorting {
            margin-top: 50px;
          }
          .food-list {
            margin-top: 20px;
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
