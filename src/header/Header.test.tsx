import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header', () => {
  it('should render properly', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
  });
});
