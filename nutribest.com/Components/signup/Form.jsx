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
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);

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
              <Input type='text' />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            <FormControl id="number" isRequired>
              <FormLabel>Mobile No.</FormLabel>              
                <Input type='number' />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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
                isLoading={false}
                size="lg"
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
