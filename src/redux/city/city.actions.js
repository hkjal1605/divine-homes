import cityActionTypes from './city.types';
import { firestore, convertCitySnapshotToMap } from '../../components/firebase/firebase.utils';

export const fetchCityListStart = () => ({
    type: cityActionTypes.FETCH_CITYLIST_START
});

export const fetchCityListSuccess = collectionsMap => ({
    type: cityActionTypes.FETCH_CITYLIST_SUCCESS,
    payload: collectionsMap
});

export const fetchCityListFailure = errorMessage => ({
    type: cityActionTypes.FETCH_CITYLIST_FAILURE,
    payload: errorMessage
})

export const fetchCityListStartAsync = () => {
    return dispatch => {
        const cityRef = firestore.collection('city');
        dispatch(fetchCityListStart());
    
        cityRef.get().then(snapShot => {
          const convertedCityList = convertCitySnapshotToMap(snapShot);
          dispatch(fetchCityListSuccess(convertedCityList));
        }).catch(error => dispatch(fetchCityListFailure(error.message)))
    }
}