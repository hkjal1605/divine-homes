import { createSelector } from 'reselect';

const selectCityList = state => state.city;

export const selectCity = createSelector(
    [selectCityList],
    city => city.cityCollection
);

export const selectCityForPreview = createSelector(
    [selectCity],
    cityCollection => cityCollection ? Object.keys(cityCollection).map(key => cityCollection[key]) : []
);

export const selectIndividualCity = cityUrl => 
    createSelector(
        [selectCity],
        cityCollection => (cityCollection ? cityCollection[cityUrl] : null)
)

export const selectIsCityListFetching = createSelector(
    [selectCityList],
    city => city.isFetching
);

export const selectIsCityListLoaded = createSelector(
    [selectCityList],
    city => !!city.cityCollection
);