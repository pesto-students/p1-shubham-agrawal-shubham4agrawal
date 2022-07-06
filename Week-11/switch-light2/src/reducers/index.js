import switchButton from "./toggleReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        switchButton
    }
)

export default rootReducer;

