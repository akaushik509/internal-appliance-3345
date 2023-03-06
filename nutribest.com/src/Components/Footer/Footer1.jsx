import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";

// https://i.ibb.co/h8WR68B/Apple.png
// https://i.ibb.co/26W8ryN/boy-refer.png
// https://i.ibb.co/VDxQts3/google.png
// https://i.ibb.co/MRy1DfS/Nutri-Best.jpg
// https://i.ibb.co/2ZLvPpj/physician.png
// https://i.ibb.co/jW9wRqF/subscribe.png

// https://i.ibb.co/f8vjtPd/app-cart.png
// https://i.ibb.co/rZK2mx6/app-tick.png
// https://i.ibb.co/B4wHW0m/app-watch.png
// https://i.ibb.co/dpg0Gqh/download-App-IMG.png
// https://i.ibb.co/jW9wRqF/subscribe.png

const Footer1 = () => {
  return (
    <Box width="100%" marginTop="25px" padding="10px">
      <Divider />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        width={"100%"}
        // justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
          <Image
            src={"https://i.ibb.co/dpg0Gqh/download-App-IMG.png"}
            alt="mobile"
            // width={["350px", "300px", "550px"]}
            width={"60%"}
          />
        </Flex>

        <Flex
          flexDirection="column"
          fontSize={["sm", "sm", "lg"]}
          gap={"10px"}
          justifyContent="space-around"
          padding="30px"
          width={"100%"}
        >
          <Heading as="h2" fontSize={["md", "lg", "xl"]}>
            Download the Healthkart Mobile app
          </Heading>
          <Flex gap="5" marginTop="30px">
            <Image
              src={"https://i.ibb.co/f8vjtPd/app-cart.png"}
              alt="cart"
              width="50px"
            />
            <Stack>
              <Heading as="h6" fontSize={["sm", "sm", "lg"]}>
                Easier, Faster Shopping
              </Heading>
              <Text>
                Get Authentic supplements, Fitness solutions, and a healthy
                lifestyle
              </Text>
            </Stack>
          </Flex>
          <Flex gap="5">
            <Image
              src={"https://i.ibb.co/B4wHW0m/app-watch.png"}
              alt="watch"
              width="50px"
            />
            <Stack>
              <Heading as="h6" fontSize={["sm", "sm", "lg"]}>
                Fuel your Fitness Goals
              </Heading>
              <Text>Complete challenges to build habit & win HK cash</Text>
            </Stack>
          </Flex>
          <Flex gap="5">
            <Image
              src={"https://i.ibb.co/rZK2mx6/app-tick.png"}
              alt="tick"
              width="50px"
            />
            <Stack>
              <Heading as="h6" fontSize={["sm", "sm", "lg"]}>
                Get Exclusive App Only Benefits
              </Heading>
              <Text>Extra discounts, offers and cashbacks</Text>
            </Stack>
          </Flex>
          <Flex gap="5">
            <Image
              src={"https://i.ibb.co/h8WR68B/Apple.png"}
              alt="apple"
              width="200px"
            ></Image>
            <Image
              src={"https://i.ibb.co/VDxQts3/google.png"}
              alt="google"
              width="200px"
            ></Image>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Divider />
    </Box>
  );
};

export default Footer1;
