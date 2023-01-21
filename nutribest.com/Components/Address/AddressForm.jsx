import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function AddressForm() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      
        <Stack border='1px'    py={12} px={6} m='auto' w={{base:'80%',lg:'60%'}}>
          
          <Box
           
            rounded={'lg'}
            p='10px'
            boxShadow={'lg'}
            >
            <Stack spacing={4}>
              <Stack spacing={10} direction={{base:'column',lg:'row'}} >
                <Box w={{base:'100%',lg:'60%'}}>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box w={{base:'100%',lg:'60%'}}>
                  <FormControl id="Mobileno" isRequired>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input type="number" />
                  </FormControl>
                </Box>
              </Stack>
              <FormControl id="address" isRequired>
                <FormLabel>Address(Area & Street)</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Address Type</FormLabel>
                <HStack>
                  <Button colorScheme={'teal'} variant={'outline'}>Home</Button>
                  <Button colorScheme={'teal'} variant={'outline'}>Office</Button>
                  <Button colorScheme={'teal'} variant={'outline'}>Others</Button>
                </HStack>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'teal.400'}
                  color={'white'}
                  _hover={{
                    bg: 'teal',
                  }}>
                  Save & Deliver
                </Button>
              </Stack>
              
            </Stack>
          </Box>
        </Stack>
      
    );
  }