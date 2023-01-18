import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { Slide } from 'react-slideshow-image'

const Advertise = () => {
  return (
        <Box backgroundColor="#effbfc" height="400" width="100%"  marginTop="15px" paddingTop="5">
        <Slide >
         {advertiseImages.map((advertiseImage, index)=> (
          <Image key={index} src={advertiseImage.img_url} alt={advertiseImage.caption} width="100%" height="380"/>
          ))} 
        </Slide>
      </Box>
  )
}

export default Advertise