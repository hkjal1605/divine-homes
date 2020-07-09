import houseActionTypes from './house.types';
import { firestore, convertHouseSnapshotToMap } from '../../components/firebase/firebase.utils';

export const fetchHouseListStart = () => ({
    type: houseActionTypes.FETCH_HOUSELIST_START
});

export const fetchHouseListSuccess = houseMap => ({
    type: houseActionTypes.FETCH_HOUSELIST_SUCCESS,
    payload: houseMap
});

export const fetchHouseListFailure = errorMessage => ({
    type: houseActionTypes.FETCH_HOUSELIST_FAILURE,
    payload: errorMessage
})

export const fetchHouseListStartAsync = () => {
    return dispatch => {
        const houseRef = firestore.collection('house');
        dispatch(fetchHouseListStart());

        houseRef.get().then(snapshot => {
            const convertedHouseList = convertHouseSnapshotToMap(snapshot)
            dispatch(fetchHouseListSuccess(convertedHouseList))
        }).catch(error => dispatch(fetchHouseListFailure(error.message)))
    }
};