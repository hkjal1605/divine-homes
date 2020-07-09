import SearchActionTypes from './search-box.types';

export const handleChange = (event) => ({
    type: SearchActionTypes.HANDLE_CHANGE,
    payload: event.target.value
});

export const clearSearch = () => ({
    type: SearchActionTypes.CLEAR_SEARCH,
    payload: ''
})