import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";

import React from "react";

const Dashboard = () => {
  return (
    <Box color={"white"} minH={"100vh"} mt={{ base: "60px", md: "0px" }}>
      <Text color={"red"}>Dashboard</Text>
      <Button
        onClick={() => {
          axios
            .patch(`http://localhost:8080/WheyProtien/B000QSNYGI`, {
              active: true,
            })
            .then((res) => console.log(res.data));
        }}
      >
        click
      </Button>
    </Box>
  );
};

export default Dashboard;
