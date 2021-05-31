import { mount, shallow } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en LoginScreen', () => {
  
  const user = {
    name: 'Nahuel Bentos',
    email: 'nahuelbentosgnocchi@gmail.com',
  };

  const setUser = jest.fn( () => {})

  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should de llamar al setUser', () => {

    wrapper.find('button').simulate('click');
    
    expect(setUser).toHaveBeenCalledWith({ id: 1, name: 'Nahuel' });
    
  });
  
});
