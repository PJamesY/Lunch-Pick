import React from 'react';
import { shallow } from 'enzyme';
import TodoTitle from './TodoTitle';

describe('TodoTitle', () => {
  it('renders props title exactly', () => {
    const wrapper = shallow(<TodoTitle title="todo title" />).props();
    expect(wrapper.children).toEqual('todo title');
  });
});
