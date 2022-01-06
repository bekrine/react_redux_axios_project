import {ActionTypes} from '../contants/action-type'

export const setproducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectproduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectproduct=()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}