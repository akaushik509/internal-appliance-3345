import React from 'react'
import AdvertiseMain from './AdvertiseMain'
import sale1 from "./sale1.png";
import sale2 from "./sale2.png";
import sale3 from "./sale3.png";
import sale4 from "./sale4.png";
import sale5 from "./sale5.png";
import { Slide } from 'react-slideshow-image';
import { Box, Divider, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";


// const data = [sale1, sale2, sale3, sale4, sale5];

// const Advertise1Data =  [
//     {
//       "id": 1,
//       "img_url": sale1,
//       "caption": "sale1"
//     },
//     {
//       "id": 2,
//       "img_url": sale2,
//       "caption": "sale2"
//     },
//     {
//       "id": 3,
//       "img_url": sale3,
//       "caption": "sale3"
//     },
//     {
//       "id": 4,
//       "img_url": sale4,
//       "caption": "sale4"
//     },
//     // {
//     //   "id": 5,
//     //   "img_url": sale5,
//     //   "caption": "sale5"
//     // }
//   ];

const AdvertiseSmall = ( {data} ) => {
  return (
    <Box backgroundColor="#effbfc" height="400" width="100%"  marginTop="15px" paddingTop="5">
        <Flex height="400" width="80%" margin="auto" marginTop='20px' gap='10' >
              {data.map((advertiseImage, index)=> (
                <img key={index} src={advertiseImage.img_url} alt={advertiseImage.caption} width="15%" />
              ))} 
          </Flex>
    </Box>
  )
}

export default AdvertiseSmall
