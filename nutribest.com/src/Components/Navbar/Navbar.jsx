import {
  Flex,
  Box,
  Button,
  Input,
  Menu,
  useDisclosure,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  InputGroup,
  InputLeftElement,
  Image,
  Avatar,
  MenuItemOption,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import NutriBest from "../../public/images/logo_withname.png";
// import logo from "../../public/images/logo.png";
import dynamic from "next/dynamic";
import { BsPersonLinesFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSubject } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { TbDiscount2 } from "react-icons/tb";
import { MdLocationPin, MdPersonOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiPhoneIncoming, BiSupport } from "react-icons/bi";
import Link from "next/link";
import Styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import Signup from "../signup/Signup";
import axios from "axios";
import IconWithNumber from "./IconWithNumber";
// import SignupAdmin from "Components/adminlogin/signup/SignupAdmin";

// const authWorkflow = [
//   { title: "Signup", page: <Signup /> },
//   { title: "adminSignup", page: <SignupAdmin /> },
// ];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [suggestions, setSuggestions] = useState([]);
  const [sessionKey, setSessionKey] = useState("");

  const [cartCount, setCartCount] = useState(0);
  // let loggedUserId;

  // const [SignUpWorkflow, setSignUpDataWorkFlow] = useState(authWorkflow[0]);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleChangeWorkflow=(value)=>{
  //   authWorkflow.map((el)=>{
  //    if(el.title===value){
  //     setSignUpDataWorkFlow(el)
  //    }
  //   })
  //  }
  useEffect(() => {
    const loggedUserId =
      JSON.parse(sessionStorage.getItem("LoggedUser_id")) || [];
    setSessionKey(loggedUserId);
    console.log(loggedUserId);
    getCartItems();
  }, []);
  
  const handleSearchData = (e) => {
    let data_input = e.target.value.split("");
    let convert = data_input[0]?.toUpperCase();
    data_input[0] = convert;
    let searchedData = data_input.join("");

    handleChange(searchedData);
  };

  const handleChange = async (value) => {
    let res = await fetch(`http://localhost:8080/AllProducts`);
    let data = await res.json();
    console.log(data);
    data = data.filter((el) => {
      return el.product_title.includes(value);
    });
    setSuggestions(data);
  };

  const router = useRouter();

  const handleClick = (id) => {
    console.log("visiting page", id);
    router.push(`/product/${id}`);
  };

  const handlePage = (page) => {
    router.push(`/${page}`);
  };


  const getCartItems = () => {
    const userId = sessionStorage.getItem("LoggedUser_id") || "";
    axios.get(`http://localhost:8080/User-Details/${userId}`)
    .then(res=>{
      let data = res.data.Orders
      setCartCount(data?.length);
      // console.log(data.length)
      //return data
    })
  }
  
  return (
    <Box className={Styles.navbar} color="black">
      <Flex
        justifyContent={["space-around", "space-evenly"]}
        alignItems="center"
        width="100%"
        height="70px"
      >
        {/* boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" */}
        {/* <Image src={NutriBest} alt="NutriBest" width='90' height='70'/>
            <Input placeholder="Search for products and brands..." width='500' height='30'/>
            <Flex justifyContent="space-between">
                <Button><BsPersonLinesFill /></Button>
                <Button><AiOutlineShoppingCart/></Button>  display={{base:"none", md:"flex"}}
            </Flex> */}
        <Box
          display={{ base: "none", md: "block" }}
          w={["100px", "100px", "180px"]}
          onClick={() => handlePage("/")}
        >
          {/* <Image src={NutriBest} alt="NutriBest" ></Image> */}
          <Image
            src={"https://i.ibb.co/KNkk7GQ/logo-withname.png"}
            alt="NutriBest"
          ></Image>
        </Box>
        <Box
          display={{ base: "block", md: "none" }}
          w={["50px", "80px", "180px"]}
          float="left"
          onClick={() => handlePage("/")}
        >
          <Image
            src={"https://i.ibb.co/C2pCDcf/logo.png"}
            alt="NutriBest"
          ></Image>
        </Box>

        <Box
          onClick={() => {
            onClose();
          }}
          display={["none", "none", "flex"]}
          w={["30%"]}
          h="35"
        >
          {/* <Input variant='filled' w={["10%","20%","35%"]} placeholder="Search for products and brands..." w='100%' h='35' borderRadius="5px"/> */}
          <InputGroup variant="filled" w="100%" h="35">
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<BsSearch color="gray.300" />}
              margin="0 auto"
            />
            <Input
              border="1px solid"
              type="text"
              placeholder="Search for products and brands..."
              _placeholder={{ color: "gray" }}
              onClick={onOpen}
              onChange={handleSearchData}
              w="100%"
              h="35"
            />
            {suggestions?.length > 0 && (
              <Box
                onClose={onClose}
                isOpen={isOpen}
                className={Styles.autocomplete}
              >
                {suggestions?.map((el, i) => (
                  <Box
                    onClick={() => handleClick(el.id)}
                    key={i}
                    className={Styles.autocompleteItems}
                  >
                    <Flex height={"50px"}>
                      <Image alt="image" width={"30%"} src={el.product_photo} />
                      <Heading size={"xs"} overflow="hidden">
                        {el.product_title}
                      </Heading>
                    </Flex>
                  </Box>
                ))}
              </Box>
            )}
          </InputGroup>
        </Box>
        {/* <Box  w='180px' h='30'> */}
        <Flex
          justifyContent="space-around"
          alignItems={"center"}
          w={["50%", "12%"]}
          h="35"
        >
          {sessionKey?.length === 0 ? (
            <Menu>
              <MenuButton as={Button} colorScheme="teal">
                Login
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Signup />
                </MenuItem>
                <MenuItem>Admin Login</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href={"/myaccount"}>Account Info</Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    sessionStorage.removeItem("LoggedUser_id");
                    window.location.reload();
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}
          {/* <Link href={"/myaccount"}>
            <Button
              w={["40px", "80px", "100px"]}
              border="none"
              background="none"
              fontSize="28px"
            >
              <MdPersonOutline fontSize="28px" />
            </Button>
          </Link> */}

          <Button w="30%" border="none" background="none" fontSize="28px">
            <Link href={"/cart"}>
              {/* <span>
              <AiOutlineShoppingCart /> <h6>{cartCount}</h6>
              </span> */}
              <IconWithNumber iconClass="fa fa-shopping-cart" number={cartCount} />
              {/* <AiOutlineShoppingCart />
              <span>{cartCount}</span> */}
            </Link>
          </Button>
        </Flex>
        {/* </Box> */}
      </Flex>
      <hr />
      <Flex
        justifyContent="center"
        alignItems="center"
        gap="25"
        width="100%"
        height="55px"
        padding="auto"
        marginTop="10px"
      >
        <Menu alignItems="center">
          <MenuButton
            // border="1px solid red"
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="5px"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            width={["180px", "180px"]}
            // leftIcon={<MdOutlineSubject />}
          >
            {/* <MdOutlineSubject /> */}
            Shop by Category
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handlePage("ayurvedic")}>
              Ayurvedic
            </MenuItem>
            <MenuItem onClick={() => handlePage("equipments")}>
              Equipments
            </MenuItem>
            {/* <MenuDivider /> */}
            <MenuItem onClick={() => handlePage("gainers")}>Gainers</MenuItem>
            <MenuItem onClick={() => handlePage("juice")}>
              Health Food & Drinks
            </MenuItem>
            <MenuItem onClick={() => handlePage("protienfoods")}>
              Protien foods
            </MenuItem>
            <MenuItem onClick={() => handlePage("wheyprotien")}>
              Whey protien
            </MenuItem>
          </MenuList>
        </Menu>
        <Box display={{ base: "none", md: "flex" }}>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<FaTag />}
          >
            Best Sellers
          </Button>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<SlBadge />}
          >
            Brands
          </Button>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<TbDiscount2 />}
          >
            Deals
          </Button>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<CgWebsite />}
          >
            Blogs
          </Button>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<BiSupport />}
          >
            Gift Card
          </Button>
          <Button
            zIndex={-1}
            border="none"
            background="none"
            fontSize={{ md: "10px", lg: "16px" }}
            leftIcon={<MdLocationPin />}
          >
            Customer Support
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
