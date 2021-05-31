import { shallow } from "enzyme"
import { TodoList } from "../../../../components/08-useReducer/components/TodoList"
import { demoTodos } from "../../../fixtures/demoTodos"

describe('Pruebas en <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  
  const wrapper = shallow( <TodoList
     todos={ demoTodos}
     handleDelete={handleDelete}
     handleToggle={handleToggle}
      />);

  test('should de mostrase correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should de dos <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length ).toBe(demoTodos.length);
    expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );
    expect( wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual( expect.any(Function) );
  });



  
  
  
})
