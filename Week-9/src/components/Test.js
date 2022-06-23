import {React} from "react";
import { combineReducers, createStore } from "redux";


function addReducer(currectState, action) {
    if(currectState === undefined) {
        return 1;
    }
    else {
        return currectState++;
    }
}

function decReducer(currectState, action) {
    if(currectState === undefined) {
        return -1;
    }
    else {
        return currectState--;
    }
}

const reducers = combineReducers({
    inc: addReducer,
    dec: decReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log(`state changed`);
    console.log(store.getState())
})

store.dispatch({  })