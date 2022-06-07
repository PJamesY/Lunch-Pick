import React from 'react';
import getRestAreaList from '../../api/restAreaList';
import { IExtractedRestArea } from '../../types/restArea';
import Link from 'next/link';

export interface RestAreaProps {
  restAreaList: IExtractedRestArea[];
}

function RestArea({ restAreaList }: RestAreaProps) {
  return (
    <>
      <ul>
        {restAreaList.map((restArea, idx) => (
          <li key={restArea.restAreaCode}>
            <Link href={`/restArea/${encodeURIComponent(restArea.restAreaCode)}`}>
              <a>{restArea.restAreaName}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 1ch;
            column-gap: 1ch;
          }

          li {
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid red;
          }
        `}
      </style>
    </>
  );
}

export async function getStaticProps() {
  const restAreaList = await getRestAreaList();
  return {
    props: {
      restAreaList: restAreaList,
    },
  };
}

export default RestArea;
