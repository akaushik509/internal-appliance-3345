import { ADDWATCH,REMOVEWATCH } from "./types";
/* 
export async function getWatch(dispatch){
    let res = await fetch("http://localhost:8080/watchlist");
    let data = await res.json();
    dispatch({type:GETWATCH, payload:data});
 }; */

 export const addWatch = (item) => ({
  type: ADDWATCH,
  payload: item,
});

export const deleteWatch = (id) => ({
  type: REMOVEWATCH,
  payload: id
});


