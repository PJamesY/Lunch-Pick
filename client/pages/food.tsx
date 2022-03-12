import React from 'react';
import getRestAreaList from '../api/restAreaList';
import { IRestAreaList } from '../types/restArea';

export interface foodProps {
  restAreaList: IRestAreaList[];
}

const food: React.FC<foodProps> = ({ restAreaList }) => {
  return (
    <ul>
      {restAreaList.map((restArea) => (
        <li key={restArea.restAreaCode}>{restArea.restAreaName}</li>
      ))}

      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          li {
            height: 40px;
          }
        `}
      </style>
    </ul>
  );
};

export async function getStaticProps() {
  const restAreaList = await getRestAreaList();
  return {
    props: {
      restAreaList: restAreaList,
    },
  };
}

export default food;
