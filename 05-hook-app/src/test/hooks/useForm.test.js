import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';


describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'Nahuel',
    email: 'nahuelbentosgnocchi@gmail.com'
  }
  
  test('should de retornar un formulario por defecto', () => {
    const { result } = renderHook( () => useForm(initialForm) );
    const [values, handleInputChange, reset] = result.current;
    expect(initialForm).toEqual(values);
    expect(typeof handleInputChange).toBe( 'function' )
    expect(typeof reset).toBe( 'function' )
  });

  test('should cambiar el valor del formulario (cambiar name)', () => {

    
    const { result } = renderHook(() => useForm(initialForm));
    const [,handleInputChange] = result.current;
    
    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          value: 'Nahuel Bentos',
        },
      })
    );

    const [values] = result.current;
    expect(values.name).toBe('Nahuel Bentos'); 
    
  });

  test('should de reestablecer el formulario con RESET', () => {
    
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          values: 'Nahuel Bentos',
        },
      }),
      reset()
    );

    expect(initialForm).toEqual(values);
  })
  
  

})
