import {
  USER_CART_LENGTH,
  USER_GET_MAXPRICE,
  USER_GET_PRICE,
  USER_GET_SUCCESS,
} from "./card.type";

let initState = {
  data: [],
  totalPrice: 0,
  totalMaxprice: 0,
  totalLength: 0,
};

export const cardsreducer = (state = initState, { type, payload }) => {
  console.log("reducerData", initState.data);
  switch (type) {
    case USER_GET_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
      
    }

    case USER_GET_PRICE: {
      return {
        ...state,
        totalPrice: payload,
      };
    }

    case USER_GET_MAXPRICE: {
      return {
        ...state,
        totalMaxprice: payload,
      };
    }

    case USER_CART_LENGTH: {
      return {
        ...state,
        totalLength: payload,
      };
    }
    default: {
      return state;
    }
  }
};
