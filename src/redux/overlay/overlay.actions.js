import OverlayActionTypes from './overlay.types';



export const toggleOverlayVisible = (boolean) => ({
    type: OverlayActionTypes.TOGGLE_OVERLAY_VISIBLE,
    payload: boolean
})