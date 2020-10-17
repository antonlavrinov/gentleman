import FilterActionTypes from './filter.types';



export const setFilterColor = (color) => ({
    type: FilterActionTypes.SET_FILTER_COLOR,
    payload: color
})



export const setFilterSize = (size) => ({
    type: FilterActionTypes.SET_FILTER_SIZE,
    payload: size
})

export const setFilterSeason = (season) => ({
    type: FilterActionTypes.SET_FILTER_SEASON,
    payload: season
})

export const setFilterMaterial = (material) => ({
    type: FilterActionTypes.SET_FILTER_MATERIAL,
    payload: material
})

export const setFilterPrice = (price) => ({
    type: FilterActionTypes.SET_FILTER_PRICE,
    payload: price
})

export const resetFilter = () => ({
    type: 'FILTERS_RESET'
})