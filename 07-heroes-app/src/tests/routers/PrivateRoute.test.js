const { shallow, mount } = require('enzyme');
const { MemoryRouter } = require('react-router');
const { PrivateRoute } = require('../../routers/PrivateRoute');

describe('Pruebas en <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };
  Storage.prototype.setItem = jest.fn()

  test('should de mostrar el component si está autenticado y guardar localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={true} component={() => <span> Hola </span>} {...props} />
      </MemoryRouter>
    );

    expect( wrapper.find('span').exists() ).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

  });

  test('should de bloquear el componente si no está autenticadp', () => {

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={false} component={() => <span> Hola </span>} {...props} />
      </MemoryRouter>
    );

    
    expect(wrapper.find('span').exists()).toBeFalsy();

    
  })
  

});
