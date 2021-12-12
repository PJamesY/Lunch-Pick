import { render } from '@testing-library/react';
import ListContainer from './ListContainer';

describe('ListContainer', () => {
  it('renders tasks', () => {
    const { container } = render((
      <ListContainer />
    ));

    expect(container).toHaveTextContent('아무 일도 하기 싫다');
  })
})
