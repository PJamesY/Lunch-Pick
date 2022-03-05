import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

beforeEach(() => {
  render(<Header />);
});

describe('Header', () => {
  it('test', () => {});
  // it('should render properly', () => {
  //   const menuButton = screen.getByRole('button');
  //   fireEvent.click(menuButton);
  // });
});
