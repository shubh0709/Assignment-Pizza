import { ActionType } from '../action-types';

const initialState = {
        pizzaName: "",
        pizzaSize: "",
        pizzaToppings: []
};

export default function checkoutReducer(state = initialState, action: any) {
    
    console.log("checkoutReducer", action.payload);
    
    switch (action.type) {
        
    case ActionType.ADD_TO_CART:
        return {
            ...state,
            pizzaName: action.payload.pizzaName,
            pizzaSize: action.payload.pizzaSize,
            pizzaToppings: action.payload.pizzaToppings,
        };


        default:
            return state;
    }
}

export const getProducts = (state: any) => state.products;
export const getProductsPending = (state: any) => state.pending;
export const getProductsError = (state: any) => state.error;


