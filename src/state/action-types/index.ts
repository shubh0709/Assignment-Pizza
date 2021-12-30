
export enum ActionType {
    INIT_STORE = "INIT_STORE",
    FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE'
}

interface PizzaSize {
    isRadio: boolean,
    title: string,
    items: Array<{ size: string }>
}

interface PizzaToppings {
    isRadio: boolean,
    title: string,
    items: Array<{ name: string }>
}

export interface Pizza {
    id: number,
    name: string,
    description: string,
    isVeg: boolean,
    rating: number,
    price: number,
    img_url: string,
    size: Array<PizzaSize>,
    toppings: Array<PizzaToppings>
}

export interface Action {
    type: string;
    payload: Array<Pizza>;
}
