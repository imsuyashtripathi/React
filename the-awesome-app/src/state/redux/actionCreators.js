import axios from 'axios';
export const createAddToCartAction=(product,quantity)=>{
    return{
        type:"ADD_TO_CART",
        item:{product,quantity}
    }
}
export const removeItemFromCartAction=(product,quantity)=>{
    return{
        type:"REMOVE_FROM_CART",
        item:{product,quantity}
    }
}
export const createGetProductsAction=()=>{
    return async(dispatch)=>{
    // make the api call
        const url=process.env.REACT_APP_BASE_URL+"/products";
        try {
            const response=await axios.get(url);
            dispatch({
                type:"GET_PRODUCTS",
                products:response.data
            })
        } catch (error) {
            
        }
    }
}