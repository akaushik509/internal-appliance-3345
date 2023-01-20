import { ADDPRODUCT, REMOVEPRODUCT, GETPRODUCT } from "./types";

const init = {
    productlist:[],
}

export const Reducer = (state=init,{type,payload})=>{
    switch(type){
        
        case ADDPRODUCT:{
            let item = { ...payload, quantity: 1 };
            let updatedCart = [...state.productlist, item];
            return {
                ...state,
                productlist: updatedCart,
               
            };
        }
        case REMOVEPRODUCT:{
            
            let updatedCart = state.productlist.filter((el) => el.id != payload);
            return {
                
                productlist: updatedCart,
                
            };
        }
        case GETPRODUCT:{
            return {
                ...state,
                productlist: payload
            }
        }
        
        default:{
            return state
        }
    }
}
