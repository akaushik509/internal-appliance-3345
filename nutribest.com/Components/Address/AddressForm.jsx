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
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
  
  export default function AddressForm({Phone,Name,handlepatch}) {
    const [address, setaddress] = useState('');

    const [user_id,setId]=useState(0)

    const router = useRouter()

    const handlerouter = (user_id,address)=>{

       handlepatch(user_id,address)
        router.push('/payment')
    }



  useEffect(()=>{
      const userId = localStorage.getItem('user_id')
      setId(userId)
  },[])
   
  
    return (
      
        <Stack boxShadow={'sm'}    py={12} px={6} m='auto' w={{base:'80%',lg:'100%'}}>
          
          <Box rounded={'lg'} p='10px' boxShadow={'lg'}>
            <Stack spacing={4}>
              <Stack spacing={10} direction={{base:'column',lg:'row'}} >
                <Box w={{base:'100%',lg:'60%'}}>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" value={Name}/>
                  </FormControl>
                </Box>
                <Box w={{base:'100%',lg:'60%'}}>
                  <FormControl id="Mobileno" isRequired>
                    <FormLabel>Mobile No.</FormLabel>
                    <Input type="number" value={Phone}/>
                  </FormControl>
                </Box>
              </Stack>
              <FormControl id="address" isRequired>
                <FormLabel>Address(Area & Street)</FormLabel>
                <Input type="text"  onChange={(e)=>{setaddress(e.target.value)}} />
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
                  onClick={()=>{handlerouter(user_id,address) }}
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