import SignInDropdownActionTypes from './sign-in-dropdown.types';

const INITIAL_STATE = {
    visible: false
}

const signInDropdownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SignInDropdownActionTypes.TOGGLE_SIGN_IN_DROPDOWN_VISIBLE:
            return {
                ...state,
                visible: !state.visible
            }
            default: 
            return state;
    }
}
export default signInDropdownReducer;