import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui'
import { notesLogoutCleaning } from '../actions/notes'

export const startLoginEmailPassword = (email, password) => {
  return ( dispatch ) => {

    dispatch(startLoading())
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch( e => Swal.fire('Error', e.message, 'error'))
      .finally(  dispatch(finishLoading())  )
      ;
 
    
   }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) =>  {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        console.log(user);
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((e) => Swal.fire('Error', e.message, 'error'));
  }
}

export const startGoogleLogin = ()  => {
  return (dispatch) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({ user }) => {
          dispatch( login( user.uid, user.displayName ))
      })
  }
}

export const login = (uid, displayName) => ({type: types.login, payload: { uid, displayName }})
export const logout = () => ({type: types.logout })

export const startLogout = () => {
  return async (dispatch, getState) => {
    await firebase.auth().signOut(); 

    dispatch( logout() );
    dispatch( notesLogoutCleaning());
  }
}