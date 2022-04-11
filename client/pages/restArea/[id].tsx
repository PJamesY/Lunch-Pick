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

enum Filter {
  Recommend,
  Best,
  Premium,
}

export interface FoodProps {
  restAreaName: string;
  foodList: any[];
}

const Food: React.FC<FoodProps> = ({ restAreaName, foodList }) => {
  const [datas, setData] = useState(foodList);
  const [recommend, setRecommend] = useState(false);
  const [best, setBest] = useState(false);
  const [premium, setPremium] = useState(false);

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

  const filtering = (option) => {
    if (option === Filter.Recommend) {
      setRecommend(!recommend);

      if (recommend) {
        setData(foodList);
      } else {
        setBest(false);
        setPremium(false);
        const filterdData = foodList.filter((elem) => elem.isRecommend === 'Y');
        setData(filterdData);
      }
    } else if (option === Filter.Best) {
      setBest(!best);

      if (best) {
        setData(foodList);
      } else {
        setRecommend(false);
        setPremium(false);
        const filterdData = foodList.filter((elem) => elem.isBest === 'Y');
        setData(filterdData);
      }
    } else {
      setPremium(!premium);

      if (premium) {
        setData(foodList);
      } else {
        setRecommend(false);
        setBest(false);
        const filterdData = foodList.filter((elem) => elem.isPremium === 'Y');
        setData(filterdData);
      }
    }
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
      <div className="filter-buttons">
        <button
          className={`filter-button recommend ${recommend ? 'active' : ''}`}
          onClick={() => {
            filtering(Filter.Recommend);
          }}
        >
          추천
        </button>
        <button
          className={`filter-button best ${best ? 'active' : ''}`}
          onClick={() => {
            filtering(Filter.Best);
          }}
        >
          베스트
        </button>
        <button
          className={`filter-button premium ${premium ? 'active' : ''}`}
          onClick={() => {
            filtering(Filter.Premium);
          }}
        >
          프리미엄
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
          .filter-buttons {
            display: flex;
            justify-content: flex-end;
          }
          .filter-button {
            padding: 0;
            border: none;
            margin-left: 10px;
          }
          .filter-button.recommend.active {
            background-color: red;
          }
          .filter-button.best.active {
            background-color: green;
          }
          .filter-button.premium.active {
            background-color: orange;
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
  console.log('params', params);
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
