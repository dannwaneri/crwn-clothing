import{takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {googleSignInSuccess,googleSignInFailure} from './user.actions';


import{auth,googleProvider,createUserProfileDocument} from '../../firebase/firebase.utils'


export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(
            createUserProfileDocument,user
        )
        const userSnapshot = userRef.get();
        yield put(
            googleSignInSuccess(userSnapshot)
        );
    }catch(error){
        yield put(googleSignInFailure(error))
    }
}



export function* onGoggleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}


export function*userSagas(){
    yield all([
        call(onGoggleSignInStart)
    ]);
}