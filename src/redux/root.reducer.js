import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import { cityReducer } from './city/city.reducer';
import { houseReducer } from './house/house.reducer';
import { searchReducer } from './search-box/search-box.reducer';

const rootReducer =  combineReducers({
    user: userReducer,
    city: cityReducer,
    house: houseReducer,
    search: searchReducer
});

export default rootReducer;