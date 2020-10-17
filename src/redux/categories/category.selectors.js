import {createSelector} from 'reselect';

const selectCategories = state => state.categories;

export const selectCategoryLinks = createSelector(
    [selectCategories],
    categories => categories.categoryLinks
);

export const selectCategoryBySection = section => createSelector(
    [selectCategoryLinks],
    categoryLinks => categoryLinks.filter((categoryLink) => categoryLink.section === section)
);

export const selectCategoryNavNames = createSelector(
    [selectCategories],
    categories => {
        const categoryNavs = [];
        categories.categoryLinks.forEach(categoryLink => {
            categoryNavs.push(categoryLink.navName)
        })
        return categoryNavs;
    }
);

