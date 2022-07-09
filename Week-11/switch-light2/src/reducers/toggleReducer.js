const initialState = true;

const switchButton = (state = initialState, action) => {
    if(action.type === "TOGGLE_SWITCH") {
        return !state;
    }
    else {
        return state;
    }
}

export default switchButton;