import {createSelector} from 'reselect';

export const selectFiltersReset = state => state.filtersReset;

export const selectFiltersResetKey = createSelector(
    [selectFiltersReset],
    filtersReset => filtersReset.childKey
);




