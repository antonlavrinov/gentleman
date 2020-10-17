import {createSelector} from 'reselect';

export const selectFilter = state => state.filters;

export const selectFilterColors = createSelector(
    [selectFilter],
    filters => filters.color
);

export const selectFilterSizes = createSelector(
    [selectFilter],
    filters => filters.sizes
);

export const selectFilterSeason = createSelector(
    [selectFilter],
    filters => filters.season
);

export const selectFilterMaterial = createSelector(
    [selectFilter],
    filters => filters.material
);

export const selectFilterPrice = createSelector(
    [selectFilter],
    filters => filters.price
);



