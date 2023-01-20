import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {
  Box,
  Heading,
  Text,
  Flex,
  Image,
  Spacer,
  Grid,
  Stack,
} from "@chakra-ui/react";
import { ImgArray } from './ImageData/Asset'; 

console.log("ImgArray", ImgArray);

const ProductPageCarousel = () => {
    return (
      <Stack direction={{ base: "column", md: "column", lg: "row" }}>
        <Box
          h={{ lg: "fit-content" }}
          border={"0px solid blue"}
          w={["100%", "100%", "100%", "60%"]}
          p={"2"}
        >
          <Slide>
            {ImgArray.map((slideImage, index) => (
              <Box border={"0px solid blue"} className="each-slide" key={index}>
                <Image
                  w={"100%"}
                  src={slideImage.src}
                  alt={slideImage.blurDataURL}
                ></Image>
              </Box>
            ))}
          </Slide>
        </Box>

        <Box
          border={"0px solid red"}
          h={{ lg: "385px" }}
          display={{ base: "none", md: "none", lg: "block" }}
          w={["100%", "100%", "100%", "40%"]}
          p={"2"}
        >
          <Image
            h={"83.5%"}
            w={"100%"}
            src={
              "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-19/Screenshot%20%2888%29_590720.png"
            }
            alt={"Side Pic"}
          ></Image>
        </Box>
      </Stack>
    );
}

export default ProductPageCarousel;