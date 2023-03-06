import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import style from "./ProductCard.module.css";
// For veg(green) and red(Non-veg) icon;
const Veg_Nonveg_Icon = [
  "https://i.ibb.co/yXRh56L/Non-Vegetarian.png",
  "https://i.ibb.co/C5t6kr2/Vegetarian.png",
];
// let outputDiscount;
export default function ProductCard({
  product_photo,
  product_star_rating,
  product_num_ratings,
  product_title,
  product_price,
  product_minimum_offer_price,
  is_prime,
  active,
  id,
  handleClick,
  AddedToCart,
  product,
}) {
  const [userId, setuserId] = React.useState("");
 
  useEffect(() => {
    const useridentification = sessionStorage.getItem("LoggedUser_id") || "";
    setuserId(useridentification);
  }, []);

  return (
    <Card
      display={active ? "block" : "none"}
      p={"3"}
      border="0px solid red"
      m="auto"
      mt="30px"
      h={{ base: "fit-content" }}
      w={{ base: "70%", md: "95%", lg: "95%" }}
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardBody p="0">
        <Image
          alt="image"
          onClick={() => handleClick(id)}
          bg={"#F7F7F7"}
          p={["3% 33% 3% 33%", "15% 32% 15% 32%", "15% 32% 15% 32%"]}
          src={product_photo}
          borderRadius="5px"
          width={"100%"}
          h={{ base: "150px", md: "200px", lg: "250px" }}
        />
        <Flex
          justifyContent={"space-between"}
          p={1}
          mt={2}
          border={"0px solid blue"}
          h={{ base: "35px" }}
        >
          <Flex
            justifyContent={"space-between"}
            border={"0px solid green"}
            w={{ base: "100%", md: "75%", lg: "65%" }}
          >
            <Box
              bg={"#00B5B7"}
              w={{ base: "25%", md: "35%", lg: "35%" }}
              h={"100%"}
              borderRadius="2px"
              color={"white"}
              fontWeight={"bold"}
              textAlign="center"
              m={"2px"}
            >
              {+product_star_rating} ☆
            </Box>
            <Box
              fontWeight={"600"}
              fontSize="14px"
              display={"flex"}
              alignItems={"center"}
            >
              {product_num_ratings} reviews
            </Box>
          </Flex>
          <Box
            p={"1.5"}
            border={"0px solid black"}
            h={{ base: "14px", md: "17px" }}
            w={{ base: "20%", md: "13%", lg: "10%" }}
          >
            <Image
              h={{ base: "20px" }}
              src={is_prime ? Veg_Nonveg_Icon[0] : Veg_Nonveg_Icon[1]}
              alt="n-veg"
            />
          </Box>
        </Flex>
        <Stack textAlign="left" p={"2"} pt={"0"}>
          <Box>
            <Text className={style.title}>{product_title}</Text>
          </Box>
          <Flex
            w={{ base: "100%", md: "100%", lg: "65%" }}
            justifyContent={"space-between"}
          >
            <Box color="rgb(53, 50, 50)" fontSize="xl" fontWeight={"bold"}>
              <Text>$ {Number(product_price)}</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              color="grey"
              fontSize="16px"
              fontWeight={"600"}
              textDecoration="line-through"
            >
              <Text>$ {Math.floor(Number(product_minimum_offer_price))}</Text>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              color="green"
              fontSize="14px"
              fontWeight={"600"}
            >
              <Text>{Math.floor(Math.random() * 10)}% off</Text>
            </Box>
          </Flex>

          <Flex
            borderRadius={"4px"}
            bg={"rgb(237, 237, 237)"}
            margin={"auto"}
            w={{ base: "100%", md: "100%", lg: "100%" }}
            border={"0px solid blue"}
            justifyContent={"space-around"}
          >
            <Box h={"100%"} w={["15px", "20px"]} pt={["0px", "2px", "2px"]}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQmGpp8HRJlnETF6qiFXaW3RKMKAr5V4IYYA&usqp=CAU"
                alt="star for Prime members"
              />
            </Box>

            <Flex
              color="rgb(89, 84, 84)"
              fontSize={["11px", "11px", "12px", "16px"]}
              fontWeight={"500"}
            >
              <Text>
                $ {Math.floor(Number(product_price - 1))} for Premium Members
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter p={"2% 2% 5% 2%"}>
        <Button
          onClick={() => AddedToCart(userId, id, true, product)}
          border={"1px solid #ff8914"}
          color={"#ff8914"}
          fontWeight={"bold"}
          w={"100%"}
          _hover={{ color: "white", background: "#ff8914" }}
        >
          <BsCart
            style={{ marginRight: "7px", fontSize: "17px", fontWeight: "bold" }}
          />{" "}
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
