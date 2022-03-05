import React from 'react';
import { shallow } from 'enzyme';
import Work from './Work';

describe('Work section', () => {
  it('should match work snap shot', () => {
    expect(shallow(<Work />)).toMatchSnapshot();
  });
});
