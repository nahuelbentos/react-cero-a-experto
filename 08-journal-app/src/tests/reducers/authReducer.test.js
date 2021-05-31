import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {

  test('should de retornar el estado por defecto', () => {

    const state = authReducer({ hola:'nuevo'},{})
    expect(state).toEqual({ hola:'nuevo'});
  });

  test('should de realizar el login', () => {

    const initState = {}
    const action = {
      type: types.login,
      payload: {
        uid: 'abc',
        displayName: 'Nahuel',
      },
    };

    const state = authReducer(initState, action);
    
     expect(state).toEqual({
       uid: 'abc',
       name: 'Nahuel',
     });
  });

  test('should de realizar el logout', () => {
    const initState = {
      uid: 'a1231321bc',
      name: 'Nahuel',
    };
    const action = {
      type: types.logout
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({});
  });
  
  
})
