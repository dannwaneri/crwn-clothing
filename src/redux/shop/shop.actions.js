import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartASync = () => {
return dispatch => {
const collectionRef = firestore.collection('collections');
collectionRef.get().then(snapShot => {
  const collectionMap = convertCollectionsSnapshotToMap(snapShot)
  dispatch(fetchCollectionsSuccess(collectionMap))
}).catch(error => 
  dispatch(fetchCollectionsFailure(error)))
}
}

