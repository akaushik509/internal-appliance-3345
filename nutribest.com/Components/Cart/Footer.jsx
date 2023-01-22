import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function () {
  return (
    <div>
        <Box p='20px'>
            <Text>Copyright © , NutriBest.com, or its affiliates</Text>
            <Box>
                <Image w={{base:'100%',lg:'40%'}} src='/images/banks.png' alt='banks'/>
            </Box>
        </Box>
    </div>
  )
}
