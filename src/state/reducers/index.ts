import { combineReducers } from "redux";
import pizzaInfoReducer from "./pizzaInfoReducer";
import fetchReducer from "./fetchReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
    pizzaInfo: pizzaInfoReducer,
    processFetch: fetchReducer,
    filters: filterReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;