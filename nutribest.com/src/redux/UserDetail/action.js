import { ADDPRODUCT } from "./types";

 export const addProduct = (item) => ({
  type: ADDPRODUCT,
  payload: item,
});



