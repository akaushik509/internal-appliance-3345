// import Image from 'next/image';
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

// https://i.ibb.co/58mg2JV/muscle-Blaze.webp
// https://i.ibb.co/dkyZb7G/muscle-Tech.webp
// https://i.ibb.co/9bt16C6/peanut-Butter.webp
// https://i.ibb.co/Wfm7CTN/true-Basics.webp
const slideImages = [
  {
    id: 1,
    img_url: "https://i.ibb.co/58mg2JV/muscle-Blaze.webp",
    caption: "Muscle Blaze",
  },
  {
    id: 2,
    img_url: "https://i.ibb.co/dkyZb7G/muscle-Tech.webp",
    caption: "Muscle Tech",
  },
  {
    id: 3,
    img_url: "https://i.ibb.co/9bt16C6/peanut-Butter.webp",
    caption: "Peanut Butter",
  },
  {
    id: 4,
    img_url: "https://i.ibb.co/Wfm7CTN/true-Basics.webp",
    caption: "True Basics",
  },
];

const Carousel = () => {
  return (
    <Box
      backgroundColor="#effbfc"
      width="100%"
      marginTop="150px"
      // paddingTop="5"
    >
      <Text
        color={"black"}
        alignItems="center"
        textAlign="center"
        marginBottom="10px"
      >
        The Fit Republic Sale Is Now Live
      </Text>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <Image
            key={index}
            src={slideImage.img_url}
            alt={slideImage.caption}
            width="100%"
          />
        ))}
      </Slide>
    </Box>
  );
};

export default Carousel;
