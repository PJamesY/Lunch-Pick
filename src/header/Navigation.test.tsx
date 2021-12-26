import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Navigation from './Navigation';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation tab="" />);
});

describe('Navigation', () => {
  it('should change color when clicked', () => {
    expect(wrapper.find('li').at(0).props().color).toBe('white');
    wrapper.find('li').at(0).childAt(0).simulate('click');
    expect(wrapper.find('li').at(0).props().color).toBe('purple');
  });
});
