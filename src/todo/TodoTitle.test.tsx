import TodoTitle from './TodoTitle'
import { shallow } from 'enzyme';

describe('TodoTitle', () => {
    it('renders props title exactly', () => {
        const wrapper = shallow(<TodoTitle title="todo title" />).props()
        expect(wrapper.children).toEqual("todo title");
      })
})