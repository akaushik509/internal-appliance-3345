//http://localhost:8080/User-Details

import axios from "axios";

export const getSignUpapi = async (creds) => {
  let res = await axios.post("http://localhost:8080/User-Details", creds);
  return res.data;
};
