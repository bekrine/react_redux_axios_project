import { combineReducers } from "redux";
import { productReducer,selectedProductRedicer } from "./productReducer";

const reducers=combineReducers({
    allproducts:productReducer,
    product:selectedProductRedicer
})

export default reducers