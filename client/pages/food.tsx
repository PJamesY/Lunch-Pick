import React from 'react';
import getRestAreaList from '../api/restAreaList';

export interface foodProps {
  restAreaList: any;
}

const food: React.FC<foodProps> = ({ restAreaList }) => {
  console.log('data', restAreaList);

  return (
    <ul>
      {restAreaList.map((restArea) => (
        <li key={restArea.svarCd}>{restArea.svarNm}</li>
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
