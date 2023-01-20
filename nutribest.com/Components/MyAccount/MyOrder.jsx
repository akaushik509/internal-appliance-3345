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
} from "@chakra-ui/react";
import { deleteWatch } from "@/redux/SingleProduct/action";
import { getProduct } from "@/redux/SingleProduct/action";

const MyOrder = () => {
    const productlist = useSelector((store) => store.addProductAvi.productlist);
    const dispatch = useDispatch();
    
    const [data, setData] = useState();
    const getData = () => {
        return axios.get(`http://localhost:8080/User-Details`)
    }
    /* useEffect(() => {
        getData().then((res) => {
            setData(res.data[0].Orders)});
    }, []);  */

    useEffect(()=>{
      getProduct(dispatch);
      console.log(productlist);
    },[]);

     const handleDelete = (id) => {
        
          const res = axios.delete(`http://localhost:8080/User-Details/${id}`);
          
      }; 

  return (
    <div>
        <Box id="myorderbox1">
          <Table>
          <Thead>
            <Tr>
              <Th>S.NO.</Th>
              <Th>IMAGE</Th>
              <Th>PRODUCT NAME</Th>
              <Th>PRICE</Th>
              <Th>RATING</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productlist?.map((el, i) => (
              <Tr key={el.id}>
                <Td>{i + 1}</Td>
                <Td width="15%">
                  <Image width="100%" src={el.product_photo} alt="img"></Image>
                </Td>
                <Td>{el.product_title}</Td>
                
                <Td>{el.product_price}</Td>
                <Td>{el.product_star_rating}</Td>
                <Td>
                  <Button onClick={()=>dispatch(deleteWatch(el.id))}>Delete</Button>
                </Td>
              </Tr> 
            ))}
          </Tbody>
        </Table>
        </Box>
    </div>
  )
}

export default MyOrder