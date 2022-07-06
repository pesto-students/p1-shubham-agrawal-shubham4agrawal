import { combineReducers } from "redux";
import stepOperations from "./stepOperationsReducer";

const rootReducer = combineReducers(
    {
        stepOperations
    }
);

export default rootReducer;