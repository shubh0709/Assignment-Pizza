import { combineReducers } from "redux";
import pizzaInfoReducer from "./pizzaInfoReducer";
import fetchReducer from "./fetchReducer";

const reducers = combineReducers({
    pizzaInfo: pizzaInfoReducer,
    processFetch: fetchReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;