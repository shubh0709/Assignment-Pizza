import { ActionType, Action, Pizza } from '../action-types';
import { Dispatch } from 'redux';

export const fetchProductsBegin = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.FETCH_PRODUCTS_BEGIN
        });
    }
};

export const fetchProductsSuccess = (products: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.FETCH_PRODUCTS_SUCCESS,
            payload: { products }
        });
    }
};

export const fetchProductsFailure = (error: any) => {
    return (dispatch: Dispatch<any>) => {
        dispatch({
            type: ActionType.FETCH_PRODUCTS_FAILURE,
            payload: { error }
        });
    }
};

export const initialiseStore = (data: any) => {
    console.log("V1 inside action - initialiseStore ");
    console.log(data);
    return (dispatch: Dispatch<Action>) => {
        console.log("inside action - initialiseStore ");
        console.log(data);

        dispatch({
            type: ActionType.INIT_STORE,
            payload: data
        });
    }
};

