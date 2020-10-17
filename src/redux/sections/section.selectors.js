import {createSelector} from 'reselect';

const selectSections = state => state.sections;

export const selectSectionLinks = createSelector(
    [selectSections],
    sections => sections.sectionLinks
);

export const selectSectionNavNames = createSelector(
    [selectSections],
    sections => {
        const navNames = [];
        sections.sectionLinks.forEach(sectionLink => {
            navNames.push(sectionLink.navName)
        })
        return navNames;
    }
);

