import { ADDWATCH,GETWATCH,REMOVEWATCH } from "./types";

const init = {
    watchlist:[],
}

export const Reducer = (state=init,{type,payload})=>{
    switch(type){
        case GETWATCH:{
            return {
                ...state,
                watchlist:payload
            }
        }
        case ADDWATCH:{
            let item = { ...payload, quantity: 1 };
            let updatedCart = [...state.watchlist, item];
            let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
            return {
                ...state,
                watchlist: updatedCart,
               // count,
            };
        }
        case REMOVEWATCH:{
            let updatedCart = state.watchlist.filter((el) => el.id != payload);
            //let count = updatedCart.reduce((total, el) => total + el.quantity, 0);
            return {
                watchlist: updatedCart,
                //count,
            };
        }
        default:{
            return state
        }
    }
}
