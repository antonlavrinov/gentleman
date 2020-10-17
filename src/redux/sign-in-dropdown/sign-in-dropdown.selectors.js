import {createSelector} from 'reselect';

const selectSignInDropdown = state => state.signInDropdown;

export const selectSignInDropdownVisible = createSelector(
    [selectSignInDropdown],
    signInDropdown => signInDropdown.visible
)