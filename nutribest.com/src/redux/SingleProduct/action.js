import { ADDPRODUCT, REMOVEPRODUCT, GETPRODUCT } from "./types";
import axios from "axios";
 export const addProduct = (item) => ({
  type: ADDPRODUCT,
  payload: item,
});

export const deleteWatch = (id) => ({
  type: REMOVEPRODUCT,
  payload: id
});

export const getProduct = async(dispatch) => {
  try{
      let res = await axios.get("http://localhost:8080/User-Details");
      dispatch({ type:GETPRODUCT, payload:res.data[0].Orders });
  }catch(e){
      console.log(e)
  }
}



