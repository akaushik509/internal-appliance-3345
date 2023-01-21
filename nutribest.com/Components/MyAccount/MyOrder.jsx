import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import {
  Box,
  Button,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Select,
} from "@chakra-ui/react";



const deleteTodo = (id) => {
  return fetch(
    `https://thawing-eyrie-70822.herokuapp.com/api/todo_Item/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
  ).then((res) => res.json());
};



const MyOrder = () => {
      
    
    const [data, setData] = useState();

    const getData = (userid) => {
      return fetch(
        `http://localhost:8080/User-Details/${userid}`
      ).then((res) => res.json());
    };
    useEffect(() => {
      let userid = localStorage.getItem("user_id");
      
      getData(userid).then((res) => {
            console.log(res.Orders)
            setData(res.Orders)});
        
    }, []);

      const handleDelete = (id) => {
        const afterUpdate = data.filter((p)=>p.id!==id);
        setData(afterUpdate)  
        let userid = localStorage.getItem("user_id");
        return fetch(`http://localhost:8080/User-Details/${userid}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({Orders:afterUpdate})
        }).then((res)=>res.json());

      };

      /*  */

     

  return (
    <div>
        <Box id="myorderbox1">
          <Box>
          </Box>
          <Table>
          <Thead>
            <Tr>
              <Th>S.NO.</Th>
              <Th>IMAGE</Th>
              <Th>PRODUCT NAME</Th>
              <Th>PRICE</Th>
             
              <Th>STATUS</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          
          <Tbody>
            {data?.map((el, i) => (
              el.isOrdered? ( <Tr key={el.id}>
                <Td>{i + 1}</Td>
                <Td width="15%">
                  <Image width="50%" src={el.product_photo} alt="img"></Image>
                </Td>
                <Td>{el.product_price}</Td>
                <Td>${el.product_title}</Td>               
                <Td><Button colorScheme='teal' >{el.Order_status}</Button></Td>
                <Td>
                  <Button onClick={() => {handleDelete(el.id)}}>Delete</Button>
                </Td>
              </Tr> ) : false
              
              
            ))}
          </Tbody>
        </Table>
        </Box>
    </div>
  )
}

export default MyOrder