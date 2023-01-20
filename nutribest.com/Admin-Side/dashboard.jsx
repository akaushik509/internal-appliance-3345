import { Box, Button, Heading, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "left",
    },
    title: {
      display: true,
      text: "Order Details",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: [10, 20, 50, 10, 45, 35, 21],
      backgroundColor: "#00b5b8",
    },
  ],
};

import React from "react";

const Dashboard = () => {
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome to Dashboard</Text>

      <Box
        width={{ base: "100%", md: "80%", lg: "60%" }}
        m={"auto"}
        mt={"50px"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
      >
        <Bar options={options} data={data} />
      </Box>
    </Box>
  );
};

export default Dashboard;
