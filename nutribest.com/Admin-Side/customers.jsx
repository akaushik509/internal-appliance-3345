import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Customers = () => {
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Customers</Heading>
      <Text color={"#00b5b8"}>List of Customers</Text>
    </Box>
  );
};

export default Customers;
