import { types } from "../../types/types"

describe('Pruebas en types.js', ()=> {

  test('should ser igual al objeto', () => {
    const testTypes = {
      login: '[Auth] login',
      logout: '[Auth] logout',

      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',

      notesAddNew: '[Notes] New note',
      notesActive: '[Notes] Set Active note',
      notesLoad: '[Notes] Load notes',
      notesUpdated: '[Notes] Update note',
      notesFileUrl: '[Notes] Update image url',
      notesDelete: '[Notes] Delete note',
      notesLogoutCleaning: '[Notes] Logout Cleaning',
    };

    expect(types).toEqual(testTypes);
    
  })
  
})