const initialState = 0;

const stepOperations = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_STEP':
            return state + 1;
        case 'RESET_STEPS':
            return 0;
        default:
            return state;        
    }
} 

export default stepOperations;