import { Box, Divider, Flex, Image, SimpleGrid } from "@chakra-ui/react";
// import Image from 'next/image'
import React from "react";
// import { Slide } from 'react-slideshow-image'

const AdvertiseMain = ({ data }) => {
  return (
    <Box width="100%" marginTop="65px" padding="10px" justifyContent="center">
      <Divider />
      <SimpleGrid
        columns={[1, 2, 2, 4]}
        height={["1650px", "1200px", "850px", "400px"]}
        width="80%"
        margin="auto"
        marginTop="20px"
        gap="5"
      >
        {data?.map((advertiseImage, index) => (
          <Image
            key={index}
            src={advertiseImage.img_url}
            alt={advertiseImage.caption}
            width={"90%"}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AdvertiseMain;
