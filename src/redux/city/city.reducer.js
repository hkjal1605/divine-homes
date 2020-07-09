import cityActionTypes from './city.types';

const INITIAL_STATE = {
    cityCollection: null,
    isFetching: false,
    errorMessage: ''
};

export const cityReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case cityActionTypes.FETCH_CITYLIST_START: 
            return {
                ...state,
                isFetching: true
            }
        case cityActionTypes.FETCH_CITYLIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cityCollection: action.payload
            }
        case cityActionTypes.FETCH_CITYLIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}