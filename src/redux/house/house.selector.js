import { createSelector } from 'reselect';

const selectHouseList = state => state.house;

export const selectHouse = createSelector(
    [selectHouseList],
    houseList => houseList.houseCollection
);

export const selectHouseForPreview = createSelector(
    [selectHouse],
    houseCollection => houseCollection ? Object.keys(houseCollection).map(key => houseCollection[key]) : []
);

export const selectIsHouseListLoaded = createSelector(
    [selectHouseList],
    house => !!house.houseCollection
);

export const selectIndividualHouse = houseUrl => 
    createSelector(
        [selectHouse],
        houseCollection => (houseCollection ? houseCollection[houseUrl] : null)
)