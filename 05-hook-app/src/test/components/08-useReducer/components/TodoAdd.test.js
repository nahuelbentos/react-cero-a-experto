import { shallow } from "enzyme"
import { TodoAdd } from "../../../../components/08-useReducer/components/TodoAdd"

describe('Pruebas en <TodoAdd />', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo } />);

  test('should de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('no should de llamar al handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toBeCalledTimes(0);
  });

  test('should de llamar la funcion handleAddTodo', () => {

    const value = 'Aprender React';
    wrapper.find('input').simulate('change',{
      target: {
        value,
        name:'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toBeCalledTimes(1);
    expect(handleAddTodo).toBeCalledWith( expect.any(Object) );
    expect(handleAddTodo).toBeCalledWith( {
      id: expect.any(Number),
      desc: value,
      done:false
    } );

    
    expect( wrapper.find('input').prop('value')).toBe('');


  });
  
  
  
  
})
