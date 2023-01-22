import { getCardapi } from "./card.api"
import { USER_GET_MAXPRICE, USER_GET_PRICE, USER_GET_SUCCESS } from "./card.type"


export const getCard =(user_id)=> async(dispatch)=>{
    try{
       let data = await getCardapi(user_id)
       dispatch({type:USER_GET_SUCCESS,payload:data})
 
    }
     catch(e){
       console.log("error",e)
   }
}

export const userPrice=(val)=>({
   type:USER_GET_PRICE,
   payload:val
})

export const userMaxprice=(val)=>({
   type:USER_GET_MAXPRICE,
   payload:val
})