import CATEGORY_DATA from './category.data';

const INITIAL_STATE = {
    categoryLinks: CATEGORY_DATA
}

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default categoriesReducer;