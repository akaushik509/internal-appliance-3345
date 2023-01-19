import { ADDPRODUCT } from "./types";

const init = {
    productlist:[],
}

export const Reducer = (state=init,{type,payload})=>{
    switch(type){
        
        case ADDPRODUCT:{
            let item = { ...payload, quantity: 1 };
            let updatedCart = [...state.productlist, item];
            let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
            return {
                ...state,
                productlist: updatedCart,
               // count,
            };
        }
        
        default:{
            return state
        }
    }
}
