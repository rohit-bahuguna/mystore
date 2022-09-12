import { combineReducers } from "redux";
import {productReducer} from './productReducer';
import {selectedProductReducer} from './selectedProductReducer';

import {loginReducer , signupReducer } from './loginReducer';
import {cartReducer} from './cartReducer';

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProductReducer,
    login: loginReducer,
    signup : signupReducer,
    cart: cartReducer,
})

export default reducers;