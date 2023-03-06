import axios from "axios";


export const getCardapi = async (user_id)=>{
   let res = await axios.get(`http://localhost:8080/User-Details/${user_id}`)
   return res.data
   
}

