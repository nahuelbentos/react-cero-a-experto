import { shallow } from "enzyme";
import { TodoListItem } from "../../../../components/08-useReducer/components/TodoListItem";
import { demoTodos } from "../../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
      <TodoListItem 
        todo={demoTodos[0]} 
        index={0} 
        handleDelete={handleDelete} 
        handleToggle={handleToggle} />);

  test('should de mosttararse correctamente', () => {

    //snapshot
    expect(wrapper).toMatchSnapshot();
    
  });

  test('should de llamar la función handleDelete', () => {
    // jest.fn()??
    // toHaveBeenCalled
    // toHaveBeenCalledWith

    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id );
  });

  test('should de llamar la función handleToggle', () => {
    // jest.fn()??
    // toHaveBeenCalled
    // toHaveBeenCalledWith
    wrapper.find('p').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should de mostrar el texto correctamente', () => {
 
    const p = wrapper.find( 'p' );
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
  });

  
  test('should de tener la clase complete', () => {
    const todo = demoTodos[0];
    todo.done = true;
    
    const wrapper = shallow(<TodoListItem todo={todo} />);

    const p = wrapper.find('p');
    expect(p.hasClass('complete')).toBeTruthy();
  });


  
  

});
