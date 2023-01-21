import { Divider, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function OrderSummary({totalprice,maxprice}) {

  const discount = maxprice-totalprice - 11
  return (
    <div>
        <VStack alignItems={'left'} rowGap='8px' pt='8px' >
            <HStack color={'gray.500'} justifyContent={'space-between'}>
              <Text fontSize='lg'>Total MRP</Text>
              <Text fontSize='lg'>₹ {maxprice}</Text>
            </HStack>

            <HStack  justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Total Discounts</Text>
              <Text color={'green.300'} fontSize='lg'>-₹ {discount} </Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Loyalty Saving</Text>
              <Text color={'green.300'} fontSize='lg'>-₹ 11 </Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text color={'gray.500'} fontSize='lg'>Shipping Charges</Text>
              <Text color={'green.300'} fontSize='lg'>FREE</Text>
            </HStack>
          <Divider />
          <HStack justifyContent={'space-between'}>
                <Heading  fontSize='lg'>Payable Amount</Heading>
                <Heading  fontSize='lg'>₹ {totalprice}</Heading>
              </HStack>
        </VStack>

    </div>
  )
}
