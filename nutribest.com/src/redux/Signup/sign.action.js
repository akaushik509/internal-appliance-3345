import { getSignapi } from "./sign.api"
import { SIGN_ERROR, SIGN_LOADING, SIGN_SUCCESS } from "./sign.type"

export const Sign =(creds)=> async(dispatch)=>{
    dispatch({type:SIGN_LOADING})
    try{
        let data = await getSignapi(creds)
        console.log(data)
        dispatch({type:SIGN_SUCCESS})

    }catch(e){
    dispatch({type:SIGN_ERROR})
    console.log(e)
    }

}

export const Logout = (dispatch)=>{

}