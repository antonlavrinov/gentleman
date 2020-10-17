import {combineReducers} from 'redux';

import productsReducer from './products/products.reducer';
import sectionsReducer from './sections/sections.reducer';
import categoriesReducer from './categories/category.reducer';
import userReducer from './user/user.reducer';
import overlayReducer from './overlay/overlay.reducer';
import cartReducer from './cart/cart.reducer';
import signInDropdownReducer from './sign-in-dropdown/sign-in-dropdown.reducer';
import filterReducer from './filter/filter.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filtersResetReducer from './filters-reset/filters-reset.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}



const appReducer = combineReducers({
    products: productsReducer,
    sections: sectionsReducer,
    categories: categoriesReducer,
    user: userReducer,
    overlay: overlayReducer,
    cart: cartReducer,
    signInDropdown: signInDropdownReducer,
    filters: filterReducer,
    filtersReset: filtersResetReducer
})

const rootReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    if (action.type === 'FILTERS_RESET') {
        const { products, sections, categories, user, overlay, cart, signInDropdown, filtersReset } = state;
        state = { products, sections, categories, user, overlay, cart, signInDropdown, filtersReset };
    }
  
    return appReducer(state, action);
  };

export default persistReducer(persistConfig, rootReducer);