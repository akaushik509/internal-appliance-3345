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
import { Sign } from "../../src/redux/Signup/sign.action";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import axios from "axios";
export default function Form() {
  const [state, setState] = useState(false);
  const [signCreds, setSigncreds] = useState({
    id: null,
    Name: "",
    Phone: null,
    Email: "",
    Image: "",
    Password: "",
    IsPrime: false,
    Address: "",
    Orders: [],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [users, setUsers] = useState([]);
  const [disbled, setDisble] = useState(true);
  const { loading, isLoggdIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [id, setId] = useState();

  const { Name, Phone, Email, Password } = signCreds;

  const getCardapi = async () => {
    let res = await axios.get(`http://localhost:8080/User-Details`);

    setUsers(res.data);
  };

  const handleuser = () => {
    let filter = users.filter(function(el) {
      return el.Email === Email;
    });
    if (filter.length > 0) {
      toast({
        title: `Account already exist`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });

      return;
    } else {
      dispatch(Sign(signCreds));
      console.log(signCreds.id);
      toast({
        title: `Sucessfull`,
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setSigncreds({
      ...signCreds,
      id: Date.now(),
      [name]: value,
    });
  };

  const submit = () => {
    handleuser();

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
    });
  };
  
  const submit2 = () => {
    let flag = false
    users.forEach(function(el) {
      if (email === el.Email && password === el.Password) {
        console.log(el.id)
        localStorage.setItem("user_id",JSON.stringify(el.id));
        
        return flag=true
      }

    });
    if(flag){

      toast({
          title: `Sucessfull`,
          status: "success",
          duration: 1000,
          isClosable: true,
        });

        


    }else{

      toast({
        title: `error`,
        status: "error",
        duration: 1000,
        isClosable: true,
      });

    }
  };

  console.log(email, password);
  useEffect(() => {
    sessionStorage.setItem('myCat', JSON.stringify('myffff'));
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
      <Stack
        display={state ? "none" : "block"}
        spacing={5}
        mx={"auto"}
        maxW={"md"}
        py={6}
        px={6}
      >
        <Stack justifyContent={"center"} direction="row">
          <Heading fontSize={"3xl"} textAlign={"center"}>
            Signup
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
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                onChange={onchange}
                value={signCreds.Name}
                name="Name"
                type="text"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={onchange}
                value={signCreds.Email}
                name="Email"
                type="email"
              />
            </FormControl>

            <FormControl id="number" isRequired>
              <FormLabel>Mobile No.</FormLabel>
              <Input
                onChange={onchange}
                value={signCreds.Phone}
                name="Phone"
                type="number"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={onchange}
                  value={signCreds.Password}
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
                isLoading={loading}
                size="lg"
                isDisabled={Password == 0}
                onClick={submit}
                bg="teal.400"
                color={"white"}
                _hover={{
                  bg: "teal",
                }}
              >
                Submit
              </Button>
            </Stack>
            <Stack pt={2}>
              <Text align={"center"}>
                *Already Registerd{" "}
                <Text
                  onClick={() => {
                    setState(true);
                  }}
                  cursor={"pointer"}
                  color="blue.500"
                >
                  Login
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* // login  */}
      <Stack
        display={state ? "block" : "none"}
        spacing={5}
        mx={"auto"}
        maxW={"md"}
        py={6}
        px={6}
      >
        <Stack justifyContent={"center"} direction="row">
          <Heading fontSize={"3xl"} textAlign={"center"}>
            Login
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
            <Stack pt={2}>
              <Text align={"center"}>
                *New User{" "}
                <Text
                  onClick={() => {
                    setState(false);
                  }}
                  cursor={"pointer"}
                  color="blue.500"
                >
                  Signup
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
