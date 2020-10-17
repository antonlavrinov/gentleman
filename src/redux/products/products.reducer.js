import PRODUCTS_DATA from './products.data';

const INITIAL_STATE = {
    items: PRODUCTS_DATA
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productsReducer;