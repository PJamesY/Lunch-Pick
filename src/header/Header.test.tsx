import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Header from './Header.tsx';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header', () => {
  it('should render properly', () => {
    expect(wrapper.text().includes);
  });
});
