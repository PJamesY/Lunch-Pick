import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(
    <Navigation
      defaultTab=""
      menus={[
        { key: 'home', to: 'home', name: '메인' },
        { key: 'work', to: 'work', name: '포트폴리오' },
        { key: 'project', to: 'project', name: '프로젝트' },
      ]}
    />,
  );

  render(
    <Navigation
      defaultTab=""
      menus={[
        { key: 'home', to: 'home', name: '메인' },
        { key: 'work', to: 'work', name: '포트폴리오' },
        { key: 'project', to: 'project', name: '프로젝트' },
      ]}
    />,
  );
});

describe('Navigation', () => {
  describe('click li tag', () => {
    it('should change color when click first li', () => {
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      wrapper.find('li').at(0).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('red');
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      expect(wrapper.find('li').at(2).props().color).toBe('white');
    });
    it('should change color when click second li', () => {
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      wrapper.find('li').at(1).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      expect(wrapper.find('li').at(1).props().color).toBe('red');
      expect(wrapper.find('li').at(2).props().color).toBe('white');
    });
    it('should change color when click third li', () => {
      expect(wrapper.find('li').at(2).props().color).toBe('white');
      wrapper.find('li').at(2).childAt(0).simulate('click');
      expect(wrapper.find('li').at(0).props().color).toBe('white');
      expect(wrapper.find('li').at(1).props().color).toBe('white');
      expect(wrapper.find('li').at(2).props().color).toBe('red');
    });
  });

  describe('click menu button', () => {
    it('should show close button when click menu button and show menu button when click close button', () => {
      const menuBtn = screen.getByLabelText('menu');
      fireEvent.click(menuBtn);
      expect(screen.getByLabelText('close')).toBeInTheDocument();
      const closeBtn = screen.getByLabelText('close');
      fireEvent.click(closeBtn);
      expect(screen.getByLabelText('menu')).toBeInTheDocument();
    });
  });
});
