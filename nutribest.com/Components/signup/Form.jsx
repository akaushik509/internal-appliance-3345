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
    Image,
    useToast,
  } from '@chakra-ui/react';
  import { useDispatch, useSelector } from "react-redux";
  import {Sign} from '../../src/redux/Signup/sign.action'
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useRouter } from 'next/router'
  
  export default function Form() {
    const [signCreds,setSigncreds] = useState({
      id: null,
      Name: "",
      Phone: null,
      Email: "",
      Image: "",
      Password: "",
      IsPrime: false,
      Address: "",
      Orders: [],
    })
    const [showPassword, setShowPassword] = useState(false);
    const [disbled,setDisble] = useState(true)
    const { loading,isLoggdIn } = useSelector((store)=>store.auth)
    const dispatch = useDispatch()
    const router = useRouter()
    const toast = useToast()
    
    const{Name,Phone,Email,Password}= signCreds
    
    
  
    const onchange = (e)=>{
      const { name, value } = e.target;
      setSigncreds({
        ...signCreds,
        id:Date.now(),
        [name]: value,
      });
    }
  
    const submit = ()=>{
      dispatch(Sign(signCreds))
      toast({
        title: `Sucessfull`,
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
      setSigncreds({
        id: null,
        Name: "",
        Phone: "",
        Email: "",
        Image: "",
        Password: "",
        IsPrime: false,
        Address: "",
        Orders: [],
      })
  
    }
  
  
  
    useEffect(()=>{
  
      
  
    },[])
  
    return (
      <Flex
        m='auto'
        border={'0px'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={5} mx={'auto'} maxW={'md'} py={6} px={6}>
          <Stack justifyContent={'center'} direction='row'>
            <Heading fontSize={'3xl'} textAlign={'center'}>
             Signup
            </Heading>
            <Image w='40px' alt='logo' src='/images/logo.png'/>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
             
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={onchange} value={signCreds.Name} name='Name' type='text' />
              </FormControl>
  
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={onchange} value={signCreds.Email} name='Email' type="email" />
              </FormControl>
  
              <FormControl id="number" isRequired>
                <FormLabel>Mobile No.</FormLabel>              
                  <Input onChange={onchange} value={signCreds.Phone}  name='Phone' type='number' />
              </FormControl>
  
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={onchange} value={signCreds.Password}  name='Password' type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={8} pt={2}>
                <Button
                  loadingText="Submitting"
                  isLoading={loading}
                  size="lg"
                  isDisabled={Password ==0}
                  onClick={submit}
                  bg='teal.400'
                  color={'white'}
                  _hover={{
                    bg: 'teal',
                  }}>
                  Submit
                </Button>
              </Stack>
              <Stack pt={2}>
                <Text align={'center'}>
                *You may receive SMS updates from NutriBest and can opt out at any time.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }