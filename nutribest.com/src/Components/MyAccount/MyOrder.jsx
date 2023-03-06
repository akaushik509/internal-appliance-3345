import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./myOrder.module.css";
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
  background,
  AlertIcon,
  Alert,
  AlertTitle,
  AlertDescription,
  useToast,
} from "@chakra-ui/react";

const deleteTodo = (id) => {
  return fetch(
    `https://thawing-eyrie-70822.herokuapp.com/api/todo_Item/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

const MyOrder = () => {
  const [data, setData] = useState();
  const toast = useToast();

  const getData = (userid) => {
    return fetch(`http://localhost:8080/User-Details/${userid}`).then((res) =>
      res.json()
    );
  };
  useEffect(() => {
    let userid = sessionStorage.getItem("LoggedUser_id") || "";

    getData(userid).then((res) => {
      const output = res.Orders.filter((el) => {
        if (el.isOrdered == true) {
          return el;
        }
      });
      setData(output);
      //console.log(res.Orders)
    });
  }, [data]);

  const handleDelete = (id) => {
    data.map((e) => {
      if (e.id == id) {
        e.Order_status = "Cancelled";
        // e.isOrdered = false;
      }
      setData(data);
    });
    console.log(data);

    /* const afterUpdate = data.filter((p)=>p.id!==id);*/
    setData(data);
    let userid = sessionStorage.getItem("LoggedUser_id") || "";
    return fetch(`http://localhost:8080/User-Details/${userid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Orders: data }),
    }).then((res) => {
      toast({
        title: "Cancelled.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      res.json();
    });
  };

  /*  */
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };

  return (
    <div>
      <Box>
        <Table>
          <Box>
            <Thead>
              <Tr width={{ base: "25px", sm: "10px", lg: "56px" }}>
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
                <Tr key={el.id}>
                  <Td>{i + 1}</Td>
                  <Td width="15%">
                    <Image width="50%" src={el.product_photo} alt="img"></Image>
                  </Td>
                  <Td>{el.product_title}</Td>
                  <Td>${el.product_price}</Td>
                  <Td>
                    <Alert
                      status="success"
                      backgroundColor={
                        el.Order_status == "Cancelled"
                          ? "red.500"
                          : el.Order_status == "Shipped"
                          ? "teal.500"
                          : el.Order_status == "Pending"
                          ? "yellow.500"
                          : "green.500"
                      }
                      color="white"
                      borderRadius={"10px"}
                    >
                      {el.Order_status}
                    </Alert>
                    {/* <Button backgroundColor={el.Order_status=="Cancelled"?"red.500":el.Order_status=="Shipped"?"teal.500":el.Order_status=="Pending"?"yellow.500":"green.500"} isDisabled={true} >{el.Order_status}</Button> */}
                  </Td>
                  <Td>
                    <Button
                      backgroundColor={
                        el.Order_status == "Cancelled"
                          ? "red.500"
                          : el.Order_status == "Shipped"
                          ? "teal.500"
                          : el.Order_status == "Pending"
                          ? "yellow.500"
                          : "green.500"
                      }
                      isDisabled={
                        el.Order_status == "Completed"
                          ? true
                          : el.Order_status == "Cancelled"
                          ? true
                          : false
                      }
                      color="white"
                      onClick={() => {
                        handleDelete(el.id);
                      }}
                    >
                      Cancel
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Box>
        </Table>
      </Box>
    </div>
  );
};

export default MyOrder;
