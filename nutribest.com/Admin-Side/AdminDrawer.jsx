import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
const AdminDrawer = ({
  prodRef,
  orderRef,
  dashboardRef,
  customerRef,
  discountRef,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <RiMenu2Line fontSize={"32px"} />
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        size={"full"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={"#0c0e1f"}
          color={"white"}
          textAlign={"center"}
        >
          <DrawerCloseButton fontSize={"xl"} />
          <DrawerBody fontSize={"2xl"} textTransform={"upperCase"}>
            <Box
              mt={"160px"}
              p={"10px"}
              _hover={{ backgroundColor: "blue.500" }}
              onClick={() => {
                dashboardRef.current.click();
                onClose();
              }}
            >
              Dashboard
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                prodRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Listings
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                orderRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Orders
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                customerRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Customers
            </Box>
            <Box
              mt={"20px"}
              p={"10px"}
              onClick={() => {
                discountRef.current.click();
                onClose();
              }}
              _hover={{ backgroundColor: "blue.500" }}
            >
              Discounts
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
