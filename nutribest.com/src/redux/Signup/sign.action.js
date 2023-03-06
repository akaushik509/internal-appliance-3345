import { getSignUpapi } from "./sign.api";
import { SIGN_ERROR, SIGN_LOADING, SIGN_SUCCESS } from "./sign.type";

export const SignUp = (creds) => async (dispatch) => {
  dispatch({ type: SIGN_LOADING });
  try {
    let data = await getSignUpapi(creds);
    // console.log(data);
    dispatch({ type: SIGN_SUCCESS });
  } catch (e) {
    dispatch({ type: SIGN_ERROR });
    console.log(e);
  }
};

export const Logout = (dispatch) => {};
