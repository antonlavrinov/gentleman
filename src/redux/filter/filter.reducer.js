import FilterActionTypes from './filter.types';

const INITIAL_STATE = {
    sizes: [],
    color: [],
    season: [],
    material: [],
    // price: price => price >= 0 && price <= 100000,
    price: []

}

const filterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FilterActionTypes.SET_FILTER_COLOR:
            return {
                ...state,
                color: action.payload
            }
        case FilterActionTypes.SET_FILTER_SIZE:
            return {
                ...state,
                sizes: action.payload
            }
        case FilterActionTypes.SET_FILTER_SEASON:
            return {
                ...state,
                season: action.payload
            }
        case FilterActionTypes.SET_FILTER_MATERIAL:
            return {
                ...state,
                material: action.payload
            }
        case FilterActionTypes.SET_FILTER_PRICE:
            return {
                ...state,
                price: action.payload
            }

        default: 
        return state;
    }
}

export default filterReducer;
