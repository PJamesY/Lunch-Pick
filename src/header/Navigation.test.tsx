import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Navigation from './Navigation.tsx';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Navigation />);
});

describe('Navigation', () => {
  it('have three contents', () => {
    const expectedTexts = ['메인', '소개', '포트폴리오'];
    const renderdTexts = expectedTexts.map((val, idx) => wrapper.find('li').at(idx).text());
    expect(renderdTexts).toEqual(expectedTexts);
  });
});
