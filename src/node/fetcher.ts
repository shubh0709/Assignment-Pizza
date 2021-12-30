//import Promise from 'promise';
import { actionCreators } from '../state';

export function fetcher() {
    actionCreators.fetchProductsBegin();
    fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw (res.error);
            }
            console.log(res);
            actionCreators.fetchProductsSuccess(res);
            return res;
        })
        .catch(error => {
            actionCreators.fetchProductsFailure(error);
        })
}


