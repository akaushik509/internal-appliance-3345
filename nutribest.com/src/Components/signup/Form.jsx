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
import { SignUp } from "@/redux/Signup/sign.action";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import axios from "axios";
export default function Form() {
  const [state, setState] = useState(false);
  const [signCreds, setSigncreds] = useState({
    id: null,
    Name: "",
    Phone: "",
    Email: "",
    Password: ""
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
  const getCardapi = () => {
    axios
      .get(`http://localhost:8080/User-Details`)
      .then((res) => setUsers(res.data));
  };

  // let validate = false;
  // const handleValidate = () => {
    
  //   if (
  //     // signCreds.Name.length == 0 ||
  //     // signCreds.Phone.length == 0 ||
  //     // signCreds.Email.length == 0 ||
  //     // signCreds.Password.length == 0
  //     Name.length == 0 ||
  //     Phone.length == 0 ||
  //     Email.length == 0 ||
  //     Password.length == 0
  //   ) {
  //     // return false;
  //     validate = true;
  //   } else {
  //     // return true;
  //     validate = false;
  //   }
  // };

  const submit = () => {
    // let valid = false;
    // let filter = users.filter(function(el) {
    //   if (el.Email === Email || el.Phone == Phone) {
    //     valid = true;
    //     // return el;
        
    //   }else if (
    //     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)
    //   ) {
    //     valid = false;
    //     toast({
    //       title: `Invalid email format.`,
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   }
    //   console.log(Email, Phone);
    // });

    // if (filter.length > 0) {
    //   toast({
    //     title: `Account already exist!`,
    //     status: "error",
    //     duration: 3000,
    //     isClosable: true,
    //   });
    // } else {
    //   // console.log(handleValidate);
    //   // console.log("validate:",validate)
    //   console.log("valid:",valid);
    //   if (validate == true) {
    //     toast({
    //       title: `Fill All Details`,
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
        
    //   } 
    //   else {
    //     dispatch(SignUp(signCreds));
    //     console.log(signCreds.id, signCreds);
    //     toast({
    //       title: `User Sucessfully Registered!`,
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     setSigncreds({
    //       id: null,
    //       Name: "",
    //       Phone: "",
    //       Email: "",
    //       Image: "",
    //       Password: "",
    //       IsPrime: false,
    //       Address: "",
    //       Orders: [],
    //     });
    //   }
    // }



    // event.preventDefault();
    let valid = true;

    // Validate email
    if (Email === "") {
      valid = false;
      toast({
        title: `Fill All Details`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)
    ) {
      valid = false;
      toast({
        title: `Invalid email format.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    // Validate password
    if (Password === "") {
      valid = false;
      toast({
        title: `Fill All Details`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (Password.length < 8) {
      valid = false;
      toast({
        title: `Password must be at least 8 characters.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    // Validate mobile number
    if (Phone === "") {
      valid = false;
      toast({
        title: `Fill All Details`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (!/^\d{10}$/.test(Phone)) {
      valid = false;
      toast({
        title: `Mobile number should be 10 digits.`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });

    }

    // Dispatch action if all fields are valid
    if (valid) {
      // dispatch(SignUp(Email, Password, Phone, Name));
      dispatch(SignUp(signCreds));
      toast({
        title: `User Sucessfully Registered!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
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
      // setTimeout(() => {
      //     window.location.href("/login");
      // }, 2000);
    }
  };
  console.log(signCreds);
  const onchange = (e) => {
    const { name, value } = e.target;
    setSigncreds({
      ...signCreds,
      id: Date.now(),
      [name]: value,
    });
  };

  const handleLogin = () => {
    getCardapi();
    let flag = false;
    users.map((el) => {
      if (email === el.Email && password === el.Password) {
        sessionStorage.setItem("LoggedUser_id", JSON.stringify(el.id));
        flag = true;
      }
    });
    if (flag) {
      toast({
        title: `Login Sucessfull`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast({
        title: `Invalid Credential or User Not Exists`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // console.log(email, password);
  useEffect(() => {
    getCardapi();
  }, []);

  return (
    <Flex
      m="auto"
      border={"0px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      {state ? (
        <Stack spacing={5} mx={"auto"} maxW={"md"} py={6} px={6}>
          <Stack justifyContent={"center"} direction="row">
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Signup
            </Heading>
            {/* <Image w="40px" alt="logo" src="/images/logo.png" /> */}
          </Stack>
          <Box rounded={"lg"} bg={"gray.200"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  border={"1px solid gray"}
                  onChange={onchange}
                  value={signCreds.Name}
                  name="Name"
                  type="text"
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  border={"1px solid gray"}
                  onChange={onchange}
                  value={signCreds.Email}
                  name="Email"
                  type="email"
                />
              </FormControl>

              <FormControl id="number" isRequired>
                <FormLabel>Mobile No.</FormLabel>
                <Input
                  border={"1px solid gray"}
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
                    border={"1px solid gray"}
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
                <Box align={"center"}>
                  *Already Registerd{" "}
                  <Text
                    onClick={() => {
                      setState(false);
                    }}
                    cursor={"pointer"}
                    color="blue.500"
                  >
                    Login
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack spacing={5} mx={"auto"} maxW={"md"} py={6} px={6}>
          <Stack justifyContent={"center"} direction="row">
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Login
            </Heading>
            {/* <Image w="40px" alt="logo" src="/images/logo.png" /> */}
          </Stack>
          <Box rounded={"lg"} bg={"gray.200"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              {/* <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input onChange={onchange} value={signCreds.Name} name='Name' type='text' />
              </FormControl> */}

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  border={"1px solid gray"}
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
                    border={"1px solid gray"}
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
                  onClick={handleLogin}
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
                <Box align={"center"}>
                  *New User{" "}
                  <Text
                    onClick={() => {
                      setState(true);
                    }}
                    cursor={"pointer"}
                    color="blue.500"
                  >
                    Signup
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      )}
    </Flex>
  );
}
