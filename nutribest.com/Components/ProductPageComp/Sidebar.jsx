import React from 'react';
import style from "./Sidebar.module.css"
import {
  Box,
} from "@chakra-ui/react";
import SideBarContent from './SidebarContent';


const Sidebar = ({
  PriceChange,
  RatingChange,
  changeReview,
  changeDiscount,
}) => {
  return (
    <Box
      display={{ base: "none", md: "block", lg: "block" }}
      w={{ base: "0", md: "25%", lg: "20%" }}
      p={["0", "10px", "10px", "25px"]}
      mt={{ base: "0", md: "125px", lg: "125px" }}
      className={style.sidebarfixed}
    >
      <SideBarContent
        RatingChange={RatingChange}
        PriceChange={PriceChange}
        changeReview={changeReview}
        changeDiscount={changeDiscount}
      />
    </Box>
  );
};

export default Sidebar;
