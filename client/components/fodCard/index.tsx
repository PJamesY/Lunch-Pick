import React, { useEffect } from 'react';

type yesNo = 'Y' | 'N';

export interface FoodCardProps {
  foodName: string;
  price: string;
  isRecommend: yesNo;
  isBest: yesNo;
  isPremium: yesNo;
}

const FoodCard: React.FC<FoodCardProps> = ({ foodName, price, isRecommend, isBest, isPremium }) => {
  return (
    <li className="food" key={foodName}>
      <span>{foodName}</span>
      <div className="tags">
        {isRecommend === 'Y' && <div className="tag recommend">추천</div>}
        {isBest === 'Y' && <div className="tag best">베스트</div>}
        {isPremium === 'Y' && <div className="tag premium">프리미엄</div>}
      </div>
      <span>₩ {price}</span>

      <style jsx>
        {`
          .food {
            position: relative;
            border-radius: 10px;
            background-color: orange;
            height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            padding: 10px;
          }

          .tags {
            position: absolute;
            display: flex;
            top: 58px;
          }

          .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid;
            width: 40px;
            height: 20px;
            border-radius: 20px;
            font-size: 0.5rem;
            margin-right: 4px;
            color: white;
            font-weight: bold;
          }

          .tag.recommend {
            border-color: blue;
            background-color: blue;
          }

          .tag.best {
            border-color: hotPink;
            background-color: hotPink;
          }

          .tag.premium {
            border-color: purple;
            background-color: purple;
          }
        `}
      </style>
    </li>
  );
};

export default FoodCard;
