import React from 'react';
import RestArea from '.';
import { render } from '@testing-library/react';
import { IRestAreaList } from '../../types/restArea';

const restAreaList = [
  {
    routeCode: 'string',
    routeName: 'string',
    restAreaName: 'string',
    restAreaCode: 'string',
    directionCode: '0',
  },
];

describe('rest arat', () => {
  it('it', () => {
    render(<RestArea restAreaList={restAreaList} />);
  });
});
