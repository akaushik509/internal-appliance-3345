

import { Flex, Box, Button, Input, Menu, MenuButton, MenuList, MenuItem, Heading, InputGroup, InputLeftElement, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import React from 'react';
import NutriBest from "./NutriBest.jpeg"
import { BsPersonLinesFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineSubject } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { TbDiscount2 } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { BiPhoneIncoming, BiSupport } from "react-icons/bi";
import Signup from "Components/signup/Signup";
import Link from "next/link";

// import Link from "next/link";



const Navbar = () => {
  return (
    <div>
        <Flex justifyContent="space-evenly" alignItems='center'  width='100%' height='70px' >
        {/* boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" */}
            {/* <Image src={NutriBest} alt="NutriBest" width='90' height='70'/>
            <Input placeholder="Search for products and brands..." width='500' height='30'/>
            <Flex justifyContent="space-between">
                <Button><BsPersonLinesFill /></Button>
                <Button><AiOutlineShoppingCart/></Button>
            </Flex> */}
            <Box  w='15%' h='100%'>
                <Image src={NutriBest} alt="NutriBest" width='100%' height='40%'/>
            </Box>
            <Box  w='35%' h='35' >
                {/* <Input variant='filled'  placeholder="Search for products and brands..." w='100%' h='35' borderRadius="5px"/> */}
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
                <Flex justifyContent="space-evenly"  w='15%' h='35' >
                    <Signup/>
                    <Button w="30%" border="none" background="none" fontSize='28px'><BsPersonLinesFill /></Button>
                    <Button w="30%" border="none" background="none" fontSize='28px'><Link href={'/cart'}><AiOutlineShoppingCart/></Link></Button>
                </Flex>
            {/* </Box> */}
        </Flex>
        <hr/>
        <Flex justifyContent="center" alignItems='center' gap='25' width='100%' height='45px'  padding="auto" marginTop="10px">
            <Menu alignItems='center'>
                <MenuButton
                    px={4}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='5px'
                    borderWidth='1px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'outline' }}
                    background="none"
                    fontSize='16px'
                >
                    <MdOutlineSubject />
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
            <Button border="none" background="none" fontSize='16px' leftIcon={<FaTag />}>Best Sellers</Button>
            <Button border="none" background="none" fontSize='16px' leftIcon={<SlBadge />}>Brands</Button>
            <Button border="none" background="none" fontSize='16px' leftIcon={<TbDiscount2 />}>Deals</Button>
            <Button border="none" background="none" fontSize='16px' leftIcon={<CgWebsite />}>Blogs</Button>
            <Button border="none" background="none" fontSize='16px' leftIcon={<BiSupport />}>Gift Card</Button>
            <Button border="none" background="none" fontSize='16px' leftIcon={<MdLocationPin />}>Customer Support</Button>
        </Flex>
    </div>
  )
}

export default Navbar