import { createSelector } from 'reselect';

export const selectSearch = state => state.search;

export const selectSearchInput = createSelector(
    [selectSearch],
    searchInput => searchInput.cityInput
);