import React from "react";
import {Box,Flex,Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react"
import { BsCart } from "react-icons/bs";
import style from "./ProductCard.module.css"

  // For veg(green) and red(Non-veg) icon;
 const Veg_Non_veg_Icon = ["https://static1.hkrtcdn.com/hknext/static/media/common/variant/Non-Vegetarian.svg","https://static1.hkrtcdn.com/hknext/static/media/common/variant/Vegetarian.svg"] 

//Function to generate random icons (Veg || Non-veg)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Function to calculate discount %
const DiscountValue = (currVal , actualVal)=>{
     currVal = Number(currVal)
     actualVal = Number(actualVal)
     var exactVal = ((currVal/actualVal)*100);
       return (Math.floor(100 - exactVal))
}

export default function ProductCard({product}) {

const {product_photo,product_star_rating,product_num_ratings,product_title,product_price,product_minimum_offer_price,} = product

 
  return (
    <Card
      p={"3"}
      border="0px solid red"
      m="15px"
      h={{ base: "fit-content" }}
      maxW="sm"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardBody p="0">
        <Image
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
              {+(product_star_rating)} ☆
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
          p={'1.5'}
            border={"0px solid black"}
            h={{ base: "14px", md: "17px" }}
            w={{ base: "20%", md: "13%", lg: "10%" }}
          >
            <Image
              h={{ base: "20px"}}
              src={Veg_Non_veg_Icon[generateRandomNumber(0, 1)]}
              alt="n-veg"
            />
          </Box>
        </Flex>
        <Stack textAlign="left" p={"2"} pt={"0"}>
          <Text className={style.title}>{product_title}</Text>
          <Flex
            w={{ base: "100%", md: "100%", lg: "65%" }}
            justifyContent={"space-between"}
          >
            <Box color="rgb(53, 50, 50)" fontSize="xl" fontWeight={"bold"}>
              ₹{Math.floor(Number(product_minimum_offer_price) * 81.3)}
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              color="grey"
              fontSize="16px"
              fontWeight={"600"}
              textDecoration="line-through"
            >
              ₹{Math.floor(Number(product_price) * 81.3)}
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              color="green"
              fontSize="14px"
              fontWeight={"600"}
            >
              {DiscountValue(+product_minimum_offer_price, +product_price)}% off
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
                src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg"
                alt="star for Prime members"
              />
            </Box>

            <Flex
              color="rgb(89, 84, 84)"
              fontSize={["11px", "11px", "12px", "16px"]}
              fontWeight={"500"}
            >
              ₹{Math.floor(Number(product_minimum_offer_price - 6) * 81.3)} for
              Premium Members
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter p={"2% 2% 5% 2%"}>
        <Button
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