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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { Sign } from "../../src/redux/Signup/sign.action";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import axios from "axios";
export default function Form() {
  const [state, setState] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState({});
  
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const router = useRouter()

  const getCardapi = async () => {
    let res = await axios.get(`http://localhost:8080/Admin-Details`);

    setUsers(res.data);
  };

  
  const patchCardapi =(val) => {
    return axios(`http://localhost:8080/Admin-Details`,{
      method: "patch",
      data:{isAuth: val}
    });
}

const handlepatch = async (val)=>{

    try{

        let res = await patchCardapi(val)

    }
    catch(err){
        console.log(err)
    }

}


 
  
  const submit2 = () => {
   
    if(users.EmailId===email && users.Password===password){
      users.isAuth = true
      handlepatch(true)
      toast({
        title: `Sucessfull`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      router.push('/admin')
    }else{
      users.isAuth = false
      handlepatch(false)
      toast({
        title: `Envalid Id or Password`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    console.log(users)
  };

  // console.log(email, password);
  // console.log(users)
  useEffect(() => {
    getCardapi();
  }, []);

  return (
    <Flex
      m="auto"
      border={"0px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {/* // sign up */}
     

      {/* // login  */}
      <Stack
        
        spacing={5}
        mx={"auto"}
        maxW={"md"}
        py={6}
        px={6}
      >
        <Stack justifyContent={"center"} direction="row">
          <Heading fontSize={"3xl"} textAlign={"center"}>
            Admin Login
          </Heading>
          <Image w="40px" alt="logo" src="/images/logo.png" />
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={onchange} value={signCreds.Name} name='Name' type='text' />
              </FormControl> */}

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
               onChange={(e) => {
                setEmail(e.target.value);
              }}
                name="Email"
                type="email"
              />
            </FormControl>

            {/* <FormControl id="number" isRequired>
                <FormLabel>Mobile No.</FormLabel>              
                  <Input onChange={onchange} value={signCreds.Phone}  name='Phone' type='number' />
              </FormControl> */}

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  name="Password"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={8} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={submit2}
                bg="teal.400"
                color={"white"}
                _hover={{
                  bg: "teal",
                }}
              >
                Submit
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
