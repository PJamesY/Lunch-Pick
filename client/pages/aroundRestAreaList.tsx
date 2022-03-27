import React, { useEffect } from 'react';
import { withRouter } from 'next/router';

export interface aroundRestAreaListProps {
  router: any;
}

const AroundRestAreaList: React.FC<aroundRestAreaListProps> = ({ router: { query } }) => {
  console.log('router', query);
  return <div>james</div>;
};

export default withRouter(AroundRestAreaList);
