import { ADDPRODUCT, REMOVEPRODUCT, GETPRODUCT } from "./types";
import axios from "axios";
 export const addProduct = async(item) => {
  try{
      let res = await axios.get("http://localhost:8080/Cart");
      dispatch({ type:ADDPRODUCT, payload:item });
  }catch(e){
      console.log(e)
  }
};

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



