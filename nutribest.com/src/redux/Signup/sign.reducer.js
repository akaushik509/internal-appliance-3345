import { SIGN_ERROR, SIGN_LOADING, SIGN_SUCCESS ,SIGN_RESET} from "./sign.type"

let initState = {
    loading:false,
    error:false,
    isLoggdIn:false,
}
export const signreducer =(state=initState,{type})=>{
    switch(type){
        case SIGN_LOADING :{
            return{
                ...state,
                loading:true
            }
        }
        case SIGN_ERROR :{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case SIGN_SUCCESS :{
            
            return{
                ...state,
                loading:false,
                isLoggdIn:true,
               
            }
        }
        case SIGN_RESET :{
            
            return{
               loading:false,
               error:false,
               isLoggdIn:false,
               
            }
        }
        default:{
            return state
        }
    }
}