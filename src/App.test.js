import { render } from '@testing-library/react';
import App from './App';

import List from './List';

describe('App', () => {
  it('renders tasks', () => {
    const { container } = render((
      <List />
    ));

    expect(container).toHaveTextContent('아무 일도 하기 싫다.');
  })
})
