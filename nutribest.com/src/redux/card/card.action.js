import { getCardapi } from "./card.api";
import {
  USER_GET_MAXPRICE,
  USER_GET_PRICE,
  USER_GET_SUCCESS,
  USER_CART_LENGTH,
} from "./card.type";

export const getCard = (user_id) => async (dispatch) => {
  if (user_id > 0) {
    try {
      let data = await getCardapi(user_id);
      dispatch({ type: USER_GET_SUCCESS, payload: data });
    } catch (e) {
      console.log("error", e);
    }
  }
};
// try {
  //   let data = await getCardapi(user_id)
  //   dispatch({ type: USER_GET_PRICE, payload: data });
  // } catch (error) {
  //   console.log("error", error);
  // }
export const userPrice = (val) => ({
  type: USER_GET_PRICE,
  payload: val,
});

export const userCartLength = (val) => ({
  type: USER_CART_LENGTH,
  payload: val,
});

export const userMaxprice = (val) => ({
  type: USER_GET_MAXPRICE,
  payload: val,
});
