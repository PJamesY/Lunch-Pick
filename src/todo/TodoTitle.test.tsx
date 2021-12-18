import TodoTitle from './TodoTitle'
import { render } from '@testing-library/react';


describe('TodoTitle', () => {
    it('renders tasks', () => {
    
        const { container } = render((
            <TodoTitle />
          
        ));
    
        expect(container).toHaveTextContent('To');
      })
})