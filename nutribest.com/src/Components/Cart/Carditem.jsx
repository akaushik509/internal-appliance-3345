import { userCartLength } from "@/redux/card/card.action";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Card,
  Box,
  HStack,
  TagLabel,
  VStack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Carditem({
   id,
  product_photo,
  product_title,
  product_price,
  handlequantity,
  quantity,
  handleDelete,
  category, 
  //data,
}) {
  const [user_id, setId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = sessionStorage.getItem("LoggedUser_id") || "";
    setId(userId);
    //console.log("asfasdf",data)
  }, []);

  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        p="20px"
        gap={"30px"}
      >
        <Box w="25%" m="auto">
          <Image
            objectFit="cover"
            w="100%"
            src={product_photo}
            alt="Caffe Latte"
          />
        </Box>

        <Stack w="99%" m="auto">
          <VStack border="0px" alignItems={"left"}>
            <Heading size="md">{category}</Heading>

            <Text py="2">{product_title}</Text>

            <Text>${product_price * quantity}</Text>
          </VStack>

          <Stack
            border="0px"
            direction={{ base: "column", sm: "row" }}
            p="5px"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box border="0px">
              <Button
                size="sm"
                colorScheme={"teal"}
                variant="outline"
                isDisabled={quantity == 1}
                onClick={() => {
                  handlequantity(id, -1, user_id);
                }}
              >
                <MinusIcon />
              </Button>
              <Button m="10px" size="sm">
                {quantity}
              </Button>
              <Button
                size="sm"
                colorScheme={"teal"}
                variant="outline"
                isDisabled={quantity == 5}
                onClick={() => {
                  handlequantity(id, 1, user_id);
                }}
              >
                <AddIcon />
              </Button>
            </Box>
            <Box>
              <Button
                variant="solid"
                size="sm"
                p="20px"
                colorScheme="red"
                onClick={() => {
                  handleDelete(id, user_id);
                }}
              >
                Remove
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
}
