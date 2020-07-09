import houseActionTypes from './house.types';

const INITIAL_STATE = {
    houseCollection: null,
    isFetching: false,
    errorMessage: ''
};

export const houseReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case houseActionTypes.FETCH_HOUSELIST_START:
            return {
                ...state,
                isFetching: true
            }
        case houseActionTypes.FETCH_HOUSELIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                houseCollection: action.payload
            }
        case houseActionTypes.FETCH_HOUSELIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
};