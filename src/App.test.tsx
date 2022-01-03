import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  // useSelector.mockImplementation((selector) => selector({
  //   tasks: [
  //     { id: 1, title: '아무 일도 하기 싫다'},
  //     { id: 2, title: 'TDD 연습'},
  //   ],
  // }));

  it('renders tasks', () => {
    // const { container } = render(<App />);
    // expect(container).toHaveTextContent('TO');
  });
});
