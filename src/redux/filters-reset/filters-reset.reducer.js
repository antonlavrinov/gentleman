import FiltersResetActionTypes from './filters-reset.types';

const INITIAL_STATE = {
    childKey: Math.random() 
}

const filtersResetReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FiltersResetActionTypes.RESET_FILTERS:
            return {
                childKey: Math.random()
            }

        default: 
        return state;
    }
}

export default filtersResetReducer;
