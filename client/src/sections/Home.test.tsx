import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home section', () => {
  it('should match snapShot', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});
