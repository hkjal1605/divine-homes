import SearchActionTypes from './search-box.types';

const INITIAL_STATE = {
    cityInput: ''
};

export const searchReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case SearchActionTypes.HANDLE_CHANGE:
            return {
                ...state,
                cityInput: action.payload
            }
        case SearchActionTypes.CLEAR_SEARCH:
                return {
                    ...state,
                    cityInput: action.payload
                }
        default:
            return {
                ...state
            }
    }
};