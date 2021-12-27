import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Navigation from './Navigation';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation defaultTab="" />);
});

describe('Navigation', () => {
  describe('click li tag', () => {
    it('should change color when click first li', () => {
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      wrapper.find('li').at(0).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('purple');
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      expect(wrapper.find('li').at(2).props().color).toBe('white');
    });
    it('should change color when click second li', () => {
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      wrapper.find('li').at(1).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      expect(wrapper.find('li').at(1).props().color).toBe('purple');
      expect(wrapper.find('li').at(2).props().color).toBe('white');
    });
    it('should change color when click third li', () => {
      expect(wrapper.find('li').at(2).props().color).toBe('white');
      wrapper.find('li').at(2).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      expect(wrapper.find('li').at(2).props().color).toBe('purple');
    });
  });
});
