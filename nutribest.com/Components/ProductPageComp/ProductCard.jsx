import React from "react";
import {Box,Flex,Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react"

const pr =  {
    "active": true,
    "id": "B000QSNYGI",
    "product_title": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
    "product_price": "$84.99",
    "product_original_price": null,
    "currency": "USD",
    "product_star_rating": 4.7,
    "product_num_ratings": 133056,
    "product_url": "https://www.amazon.com/dp/B000QSNYGI",
    "product_photo": "https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_UL960_QL65_.jpg",
    "product_num_offers": 12,
    "product_minimum_offer_price": "$78.94",
    "is_best_seller": true,
    "is_prime": true,
    "climate_pledge_friendly": false
  }

  // For veg(green) and red(Non-veg) icon;
 const Veg_Non_veg_Icon = ["https://static1.hkrtcdn.com/hknext/static/media/common/variant/Non-Vegetarian.svg","https://static1.hkrtcdn.com/hknext/static/media/common/variant/Vegetarian.svg"] 

//Function to generate random icons (Veg || Non-veg)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function ProductCard() {

const {product_photo,product_star_rating,product_num_ratings,product_title,product_price,product_minimum_offer_price,} = pr

  return (
  <Card border='1px solid red' m='15px' maxW='sm'>
  <CardBody p='0'>
    <Image
      bg={'#F7F7F7'}
      p={'10%'}
      src={product_photo}
      borderRadius='5px'
      width={'100%'}
      h={'250px'}
    />
    <Flex justifyContent={'space-between'} p={2} mt={2} border={'1px solid blue'}> 
     <Flex justifyContent={'space-between'}   border={'1px solid green'} w={'65%'} >
        <Box bg={'#00B5B7'} w={'35%'} borderRadius='2px' color={'white'} fontWeight={'bold'} textAlign='center' m={'2px'} > 
        {product_star_rating} ☆
        </Box>
        <Box fontWeight={'600'} fontSize='14px'display={'flex'} alignItems={'center'} >
        {product_num_ratings} reviews
        </Box>
     </Flex>
        <Box p={1.5} border={'1px solid black'} w={'10%'}>
            <img src={Veg_Non_veg_Icon[generateRandomNumber(0,1)]} alt="n-veg" />
        </Box>
        
    </Flex>
    <Stack textAlign='left' p={'3'}>
      <Text>
        {product_title}
      </Text>
      <Flex w={'70%'} justifyContent={'space-between'} >
        <Box color='rgb(53, 50, 50)' fontSize='xl' fontWeight={'bold'} >
        {product_minimum_offer_price} 
        </Box>
        <Box display={'flex'} alignItems={'center'} color='grey' fontSize='16px' fontWeight={'600'} textDecoration="line-through" >
        {product_minimum_offer_price} 
        </Box>
        <Box display={'flex'} alignItems={'center'} color='green' fontSize='14px' fontWeight={'600'} >
        {39}% off
        </Box>
      </Flex>
      
      <Flex borderRadius={"4px"} bg={'rgb(237, 237, 237)'} margin={'auto'} w={"100%"} border={'0px solid blue'} justifyContent={'space-around'} >
        <Box pt={'2px'}>
            <Image src='https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg' alt="star for Prime members" />
        </Box>
        <Flex color='rgb(89, 84, 84)' fontSize='16px' fontWeight={'500'} >{product_minimum_offer_price} for Premium Members</Flex>
      </Flex>
     
    </Stack>
  </CardBody>
  <CardFooter>
    <ButtonGroup >
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
}