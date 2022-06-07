import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

export interface aroundRestAreaListProps {
  router: any;
}

const AroundRestAreaList: React.FC<aroundRestAreaListProps> = ({ router: { query } }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getLoc() {
      const result = await axios.get('http://localhost:5000/api/restAreaLoc');

      const dd = result.data.data.map((area) => ({
        ...area,
        dist: (query.lon - area.xValue) ** 2 + (query.lat - area.yValue) ** 2,
      }));
      const sorted = dd.sort(function (a, b) {
        return a.dist - b.dist;
      });
      const filterdSorted = sorted.filter((elem) => elem.unitName.slice(elem.unitName.length - 3) === '휴게소');

      setList(filterdSorted);
    }
    if (query.lon && query.lat) {
      getLoc();
    }
  }, [query]);

  return (
    <div>
      {list.length !== 0 && (
        <ul>
          {list.map((li) => (
            <li key={li.serviceAreaCode}>{li.unitName}</li>
          ))}
        </ul>
      )}

      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(AroundRestAreaList);
