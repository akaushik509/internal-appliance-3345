import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Avatar,
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import React, { useRef } from "react";
import Products from "../products";
import Orders from "../orders";
import Customers from "../customers";
import Discounts from "../discounts";
import AccountInfo from "../accountInfo";
import AdminDrawer from "Admin-Side/AdminDrawer";
import Dashboard from "Admin-Side/dashboard";
const AdminMenu = () => {
  const prodRef = useRef();
  const dashboardRef = useRef();
  const customerRef = useRef();
  const orderRef = useRef();
  const accountRef = useRef();
  const discountRef = useRef();
  return (
    <>
      <Tabs display={"flex"}>
        <TabList
          display={{ base: "none", md: "inherit" }}
          textAlign={"center"}
          flexDirection={"column"}
          w={{ md: "30%", lg: "20%" }}
          padding={"10px"}
          backgroundColor={"#0c0e1f"}
          color={"white"}
          position={"fixed"}
          top={0}
          left={0}
          h={"100vh"}
        >
          <Box width={"60%"} m={"auto"} mt={0} mb={0}>
            <Image
              alt="logo"
              src="https://i.ibb.co/xDLFwBR/Nutribest-Logo.png"
            ></Image>
          </Box>

          <Box textAlign={"center"} mt={"20px"}>
            <Avatar size={"2xl"}></Avatar>
          </Box>
          <Box textAlign={"center"} mt={"20px"} mb={"20px"}>
            <Text>Sarfraj Ahmad Raza</Text>
            <Text color={"gray.400"}>abc@gmail.com</Text>
          </Box>

          <Tab
            ref={dashboardRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Dashboard
          </Tab>

          <Tab
            ref={prodRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Products
          </Tab>
          <Tab
            ref={orderRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Orders
          </Tab>
          <Tab
            ref={customerRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Customers
          </Tab>
          <Tab
            ref={discountRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Discounts
          </Tab>
          <Box padding={"5px 0px"}>
            <Divider />
          </Box>
          <Tab
            ref={accountRef}
            mb={"5px"}
            borderRadius={"5px"}
            _selected={{ color: "white", bg: "blue.500" }}
          >
            Account Info
          </Tab>
          <Button
            mt={"5px"}
            variant={"solid"}
            borderRadius={"5px"}
            colorScheme={"red"}
          >
            Logout
          </Button>
        </TabList>

        <TabPanels ml={{ md: "30%", lg: "20%" }}>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <Products />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
          <TabPanel>
            <Customers />
          </TabPanel>
          <TabPanel>
            <Discounts />
          </TabPanel>
          <TabPanel>
            <AccountInfo />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* small screen navbars */}
      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#0c0e1f"}
        color={"white"}
        position={"fixed"}
        width={"100%"}
        top={0}
        left={0}
      >
        <AdminDrawer
          orderRef={orderRef}
          dashboardRef={dashboardRef}
          customerRef={customerRef}
          discountRef={discountRef}
          prodRef={prodRef}
        />
        <Box>
          <Menu>
            <MenuButton>
              <Avatar></Avatar>
            </MenuButton>
            <MenuList backgroundColor={"#0c0e1f"} border={"1px solid #27293a"}>
              <MenuItem backgroundColor={"#0c0e1f"}>
                <Box
                  onClick={() => {
                    accountRef.current.click();
                  }}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <AiFillInfoCircle />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Account Info
                  </Text>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem backgroundColor={"#0c0e1f"} color={"red.600"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"2xl"}
                >
                  {" "}
                  <FiLogOut />{" "}
                  <Text ml={"20px"} fontSize={"md"}>
                    Logout
                  </Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default AdminMenu;
