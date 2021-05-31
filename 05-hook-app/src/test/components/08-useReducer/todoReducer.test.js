import { useReducer } from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {

  test('should retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('should de agregar un todo', () => {
    const state = todoReducer(demoTodos, {
      type: 'add',
      payload: {
        id: 3,
        desc: 'Aprender Node',
        done: false,
      },
    });

    expect(state.length === 3).toBeTruthy();
    expect(state.find((item) => item.id === 3)).not.toBeNull();
  });

  test('should de eliminar un todo', () => {
    const state = todoReducer(demoTodos, { type: 'delete', payload: 2});

    expect(state.length === 1).toBeTruthy();
    expect(state.find((item) => item.id === 2)).toBe( undefined );
  });

  test('should de hacer el toggle del todo', () => {

    const state = todoReducer(demoTodos, { type: 'toggle', payload: 2 });
    const filter = (item) => item.id === 2;
    expect(state.find(filter).done).toBe(!demoTodos.find(filter).done); 
  });
});
