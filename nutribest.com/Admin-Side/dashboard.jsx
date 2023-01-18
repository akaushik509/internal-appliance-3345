import { Box, Text } from "@chakra-ui/react";

import React from "react";

const Dashboard = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }}>
      <Text color={"red"}>Dashboard</Text>
    </Box>
  );
};

export default Dashboard;
