import {createSelector} from 'reselect';

const selectProducts = state => state.products;

export const selectItems = createSelector(
    [selectProducts],
    products => products.items
);


export const selectItemsByCategory = category => createSelector(
    [selectItems],
    items => items.filter((item) => item.category === category)
);

export const selectProductById = id => createSelector(
    [selectItems],
    items => items.find((item) => item.id === id)
)

export const selectItemsBySearchInput = search => createSelector(
    [selectItems],
    items => items.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()))
)
// filters

export const selectProductItemsWithColorFilter = createSelector(
    [selectItems],
    items => items.filter((item) => item.color)
);

export const selectAndFilterProductItemsByColor = color => createSelector(
    [selectItems],
    items => items.filter((item) => item.color === color)
);