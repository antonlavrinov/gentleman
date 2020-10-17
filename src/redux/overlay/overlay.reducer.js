import OverlayActionTypes from './overlay.types';

const INITIAL_STATE = {
    visible: false
}

const overlayReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OverlayActionTypes.TOGGLE_OVERLAY_VISIBLE:
            return {
                ...state,
                visible: action.payload
            }

        default: 
        return state;
    }
}

export default overlayReducer;
