import { Action, ActionType } from '../action-types';
import { fetcher } from '../../node/fetcher';

const initialState: any = null;

const pizzaInfoReducer = (state: any = initialState, action: Action) => {

    console.log("inside pizzaInfoReducer");
    console.log(action);

    switch (action.type) {
        case ActionType.INIT_STORE:
            return { ...state, data: action.payload };

        default:
            return { ...state };
    }
}

export default pizzaInfoReducer;