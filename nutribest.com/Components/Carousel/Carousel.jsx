import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import muscleBlaze from "./muscleBlaze.png"
import muscleTech from "./muscleTech.png";
import peanutButter from "./peanutButter.png";
import trueBasics from "./trueBasics.png";
import { Box, Heading } from "@chakra-ui/react";

const slideImages = [
  {
    "id": 1,
    "img_url": peanutButter,
    // "https://img9.hkrtcdn.com/22824/bnr_2282348_o.jpg"
    "caption": "Muscle Blaze Peanut Butter"
  },
  {
    "id": 2,
    "img_url": trueBasics,
    // "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg"
    "caption": "True Basics"
  },
  {
    "id": 3,
    "img_url": muscleBlaze,
    "caption": "Muscle Blaze"
  },
  {
    "id": 4,
    "img_url": muscleTech,
    "caption": "NitroTech"
  }
];

const Carousel = () => {
  // console.log(slideImages.);
  // backgroundColor="#effbfc" height="400" width="100%" border="1px solid red"
    return (
      <Box backgroundColor="#effbfc" height="400" width="100%"  marginTop="15px" paddingTop="40">
        <Heading as="h4" alignItems='center' textAlign='center' marginTop="-28">The Fit Republic Sale Is Now Live</Heading>
        <Slide >
         {slideImages.map((slideImage, index)=> (
          <Image key={index} src={slideImage.img_url} alt={slideImage.caption} width="100%" height="380"/>
          ))} 
        </Slide>
      </Box>
    )
}


export default Carousel

// export async function getServerSideProps() {
//   let response = await fetch("http://localhost:3004/carousel");
//   const errorCode = res.ok ? false : res.status
//   let data = await response.json();
//   console.log(data.carousel);

//   return {
//       props: { errorCode, data },
//   };
// }
