

import { Flex, Box, Button, Input, Menu, MenuButton, MenuList, MenuItem, Heading, InputGroup, InputLeftElement, Image, Spacer, Stack, VStack, HStack } from "@chakra-ui/react";
// import Image from "next/image";
import React from 'react';
import NutriBest from "../../public/images/logo_withname.png";
import logo from "../../public/images/logo.png";
import { BsPersonLinesFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSubject } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { TbDiscount2 } from "react-icons/tb";
import { MdLocationPin, MdPersonOutline } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiPhoneIncoming, BiSupport } from "react-icons/bi";
import Signup from "Components/signup/Signup";
import Link from "next/link";
import Styles from "./Navbar.module.css";
// import Link from "next/link";


const Navbar = () => {
  return (
    <div className={Styles.navbar}>
        <Flex justifyContent={["space-around","space-evenly"]} alignItems='center'  width='100%' height='70px' >
        {/* boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" */}
            {/* <Image src={NutriBest} alt="NutriBest" width='90' height='70'/>
            <Input placeholder="Search for products and brands..." width='500' height='30'/>
            <Flex justifyContent="space-between">
                <Button><BsPersonLinesFill /></Button>
                <Button><AiOutlineShoppingCart/></Button>  display={{base:"none", md:"flex"}}
            </Flex> */}
            <Box display={{base:"none", md:"block"}}  w={['100px','100px','180px']}>
                {/* <Image src={NutriBest} alt="NutriBest" ></Image> */}
                <Image src={"https://i.ibb.co/KNkk7GQ/logo-withname.png"} alt="NutriBest"></Image>
            </Box>
            <Box display={{base:"block", md:"none"}}  w={['50px','80px','180px']} float="left">
                <Image src={"https://i.ibb.co/C2pCDcf/logo.png"} alt="NutriBest" ></Image>
            </Box>
            {/* <Box  w={['100px','100px','180px']}> */}
                {/* <picture>
                    <source media="(max-width: 799px)" srcset={logo} />
                    <source media="(min-width: 800px)" srcset={NutriBest} />
                    <img src={NutriBest} alt="NutriBest" />
                </picture> */}
            {/* </Box> */}
            {/* <Image src={NutriBest} alt="NutriBest" width='10px' /> */}
            <Box display={["none","none","flex" ]} w={["30%"]} h='35' >
                {/* <Input variant='filled' w={["10%","20%","35%"]} placeholder="Search for products and brands..." w='100%' h='35' borderRadius="5px"/> */}
                <InputGroup variant='filled'  w='100%' h='35'>
                    <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<BsSearch color='gray.300' />}
                    margin='0 auto'
                    />
                    <Input type='tel' placeholder='Search for products and brands...'  w='100%' h='35' />
                </InputGroup>
            </Box>
            {/* <Box  w='180px' h='30'> */}
                <Flex justifyContent="space-evenly"  w={["50%",'15%']} h='35' >
                    <Signup/>
                    {/* "40%","80%","30%" BsPersonLinesFill*/}
                    <Button w={["40px","80px","100px"]} border="none" background="none" fontSize='28px'><MdPersonOutline fontSize='28px'/></Button>
                    <Button w="30%" border="none" background="none" fontSize='28px'><Link href={'/cart'}><AiOutlineShoppingCart/></Link></Button>
                </Flex>
            {/* </Box> */}
        </Flex>
        <hr/>
        <Flex justifyContent="center" alignItems='center' gap='25' width='100%' height='55px'  padding="auto" marginTop="10px">
            <Menu alignItems='center'  >
                <MenuButton
                    // border="1px solid red"  
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='5px'
                    borderWidth='1px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                    background="none"
                    fontSize={{md:'10px', lg:'16px'}}
                    width={["180px","180px"]}
                    // leftIcon={<MdOutlineSubject />}
                >
                    {/* <MdOutlineSubject /> */}
                     Shop by Category 
                    
                </MenuButton>
                <MenuList>
                    <MenuItem>Sports Nutrition</MenuItem>
                    <MenuItem>Vitamins & Supplements</MenuItem>
                    {/* <MenuDivider /> */}
                    <MenuItem>Ayurveda & Herbs</MenuItem>
                    <MenuItem>Health Food & Drinks</MenuItem>
                    <MenuItem>Fitness</MenuItem>
                    <MenuItem>Wellness</MenuItem>
                </MenuList>
            </Menu>
            <Box display={{ base: "none", md: "flex" }}>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<FaTag />}>Best Sellers</Button>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<SlBadge />}>Brands</Button>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<TbDiscount2 />}>Deals</Button>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<CgWebsite />}>Blogs</Button>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<BiSupport />}>Gift Card</Button>
                <Button border="none" background="none" fontSize={{md:'10px', lg:'16px'}} leftIcon={<MdLocationPin />}>Customer Support</Button>
            </Box>
            
        </Flex>
    </div>
  )
}

export default Navbar