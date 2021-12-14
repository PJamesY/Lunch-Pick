import { render } from '@testing-library/react';
import List from './List';
import tasks from '../fixer/tasks'

describe('List', () => {
  it('renders tasks', () => {

    const { container } = render((
      <List tasks={tasks} />
    ));

    expect(container).toHaveTextContent('아무 일도 하기 싫다');
    expect(container).toHaveTextContent('TDD 연습');
  })
})
