import React from 'react';
import style from "./Sidebar.module.css"
import {
  Box,
} from "@chakra-ui/react";
import SideBarContent from './SidebarContent';


const Sidebar = ({ PriceChange }) => {
  return (
    <Box
      display={{ base: "none", md: "block", lg: "block" }}
      w={{ base: "0", md: "25%", lg: "20%" }}
      p={["0", "10px", "10px", "25px"]}
      className={style.sidebarfixed}
    >
      <SideBarContent PriceChange={PriceChange} />
    </Box>
  );
};

export default Sidebar;
