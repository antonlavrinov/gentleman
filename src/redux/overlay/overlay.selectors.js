import {createSelector} from 'reselect';

const selectOverlay = state => state.overlay;

export const selectOverlayVisible = createSelector (
    [selectOverlay],
    overlay => overlay.visible
)