import { Action, ActionType } from '../action-types';

const initialState: any = {
    pizzas: {}
};

const displayOrderReducer = (state: any = initialState, action: Action) => {

    switch (action.type) {
        case ActionType.DISPLAY_ORDER:
            return { ...state, pizzas : action?.payload };

        // case ActionType.ORDER_BY_PRICE_ASCENDING:
        //     return { ...state, data: action?.payload };

        // case ActionType.ORDER_BY_PRICE_DESCENDING:
        //     return { ...state, data: action?.payload };

        // case ActionType.ORDER_BY_VEG:
        //     return { ...state, data: action?.payload };

        // case ActionType.ORDER_BY_NON_VEG:
        //     return { ...state, data: action?.payload };

        default:
            return state;
    }
}

export default displayOrderReducer;