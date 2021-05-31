
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  
  test('should de retornar el estado por defecto', () => {
    
    const state = authReducer({ logged: false},{});

    expect(state).toEqual({ logged: false });
    
    
  });

  test('should de autenticar y retornar el estado por defecto', () => {
    
    const state = authReducer({ logged: false }, { type: types.login, payload: { name: 'Nahuel' } });

    expect(state).toEqual({ logged: true, name: 'Nahuel' });
  });

  test('should de borrar el name del usuario y logged en false', () => {
    
    const state = authReducer({ logged: true, name: 'Felipe' }, { type: types.logout });

    expect(state).toEqual({ logged: false  });
  });
  

})
