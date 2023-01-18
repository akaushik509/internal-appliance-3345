import { Box, Divider, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
// import { Slide } from 'react-slideshow-image'

const AdvertiseMain = ({ data }) => {
  return (
        <Box width="100%"  marginTop="65px" padding="10px" justifyContent='center'>
          <Divider/>
          <Flex height="400" width="80%" margin="auto" marginTop='20px' gap='10' >
              {data.map((advertiseImage, index)=> (
                <Image key={index} src={advertiseImage.img_url} alt={advertiseImage.caption} width="15%" height="380"/>
              ))} 
          </Flex>
        </Box>
        
      
  )
}

export default AdvertiseMain