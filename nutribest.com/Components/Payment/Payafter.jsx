import React from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import Modalotp from './Modalotp';
export default function Payafter({handleDelete}) {
  return (
    <div>
        <Flex
       
       justify={'center'}
       bg={useColorModeValue('gray.50', 'gray.800')}>
       <Stack
         spacing={4}
         w={'full'}
         maxW={'md'}
         bg={useColorModeValue('white', 'gray.700')}
         rounded={'xl'}
         boxShadow={'lg'}
         p={6}
         my={12}>
         <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
           You Have to Verify
         </Heading>
         
        
         <Stack spacing={6} >
           <Button
            mt='20px'
             bg={'teal.400'}
             color={'white'}
             _hover={{
               bg: 'teal',
             }}>
              <Modalotp handleDelete={handleDelete}/>
           </Button>
         </Stack>
       </Stack>
     </Flex>
    </div>
  )
}
