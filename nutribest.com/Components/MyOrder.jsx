import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import axios from "axios";
import {
  Button,
  Image,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { deleteWatch } from "@/redux/UserDetail/action";

const MyOrder = () => {
    const watchlist = useSelector((store) => store.addWatchlist.watchlist);
    const dispatch = useDispatch();
    const [data, setData] = useState();
    const getData = () => {
        return axios.get(`http://localhost:8080/User-Details`)
    }
    useEffect(() => {
        getData().then((res) => {
            //console.log(res.data[0].Orders)
            setData(res.data[0].Orders)});
    }, []); 

    const handleDelete = (id) => {
        try {
          const res = axios.delete(`http://localhost:8080/User-Details/${id}`);
          alert("Sucessfully Removed");
          getData();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
        <Table w="70%" m="auto" mt="20px">
        <Thead>
          <Tr>
            <Th>S.NO.</Th>
            <Th>IMAGE</Th>
            <Th>TITLE</Th>
            
            <Th>RATING</Th>
            <Th>LANGUAGE</Th>
            <Th>DELETE</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((el, i) => (
            
            <Tr key={el.id}>
              <Td>{i + 1}</Td>
              <Td width="15%">
                <Image width="100%" src={el.product_photo} alt="img"></Image>
              </Td>
              <Td>{el.product_title}</Td>
              
              <Td>{el.product_price}</Td>
              <Td>{el.product_star_rating}</Td>
              <Td>
                <Button onClick={() => dispatch(deleteWatch(el.id))}>Delete</Button>
              </Td>
            </Tr> 
          ))}
        </Tbody>
      </Table>
    </div>
  )
}

export default MyOrder