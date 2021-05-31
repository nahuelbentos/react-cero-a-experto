import { mount, shallow } from "enzyme"
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../../components/08-useReducer/TodoApp"
import { demoTodos } from "../../../fixtures/demoTodos";

describe('Pruebas en <TodoApp />', () => {

  const wrapper = shallow( <TodoApp /> );
  Storage.prototype.setItem = jest.fn( ()=>{} )
  
  test('should de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should agregar un TODO', () => {
    
    const wrapper = mount( <TodoApp /> );
    act( () => { 
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
      wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
    
    } ); 
    // act( () =>  wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] ) ); 

    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( 2 )`);
    
    expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
  });


  test('should de eliminar un todo', () => {

     wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
     wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( 0 )`);
    
  })
  
  
  
  
})
