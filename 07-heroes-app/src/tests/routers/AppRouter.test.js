import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  const contextValue = { dispatch: jest.fn(), user: { logged: false } };
  test('should de mostrar el login si no esta autenticado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={ contextValue }>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect( wrapper ).toMatchSnapshot();
  });

  test('should de mostrar el marvel si está autenticado', () => {
    
  const contextValue = { dispatch: jest.fn(), user: { logged: true, name: 'Nahuel' } };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper.find('.navbar').exists()).toBeTruthy();
    
  })
  
});
