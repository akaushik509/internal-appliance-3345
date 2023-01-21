import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import mobile from "./download-App-IMG.svg";
import cart from "./app-cart.svg";
import watch from "./app-watch.svg";
import tick from "./app-tick.svg";
import apple from "./Apple.png";
import google from "./google.png";
import thunder from "./thunder.svg";
import physician from "./physician.png";
import boy from "./boy-refer.svg";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Footer1 = () => {
  return (
    <Box width="100%" marginTop="25px" padding="10px" justifyContent='center'>
        {/* height={["3000px","2400px","1300px"]} */}
        <Divider />
        {/* <Box width="100%"  > */}
            <SimpleGrid columns={{sm: 1, md: 1, lg:2}} justifyContent='center' alignItems={"center"} >
            {/* height={["600px","1500px","300px"]} */}
                <Flex  width={["400px","800px"]} height="600px" justifyContent='flex-end'>
                    <Image src={mobile} alt='mobile' width={["350px","300px","800px"]} />
                </Flex>
                <Flex flexDirection="column" fontSize={["sm","sm", "lg"]} gap={"10px"} justifyContent="space-around" padding="30px"  width="90%" >
                {/* height={["1500px","2000px","550px"]}  fontSize={["lg","sm", "md"]}*/}
                    <Heading as="h2" fontSize={["md", "lg", "xl"]} >Download the Healthkart Mobile app</Heading>
                    <Flex gap='5' marginTop="30px" >
                        <Image src={cart} alt='cart' width="50" />
                        <Stack >
                            <Heading as="h6" fontSize={["sm","sm", "lg"]} >Easier, Faster Shopping</Heading>
                            <Text>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={watch} alt='watch' width="50" />
                        <Stack>
                            <Heading as="h6" fontSize={["sm","sm", "lg"]}  >Fuel your Fitness Goals</Heading>
                            <Text>Complete challenges to build habit & win HK cash</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={tick} alt='tick' width="50" />
                        <Stack>
                            <Heading as="h6" fontSize={["sm","sm", "lg"]} >Get Exclusive App Only Benefits</Heading>
                            <Text>Extra discounts, offers and cashbacks</Text>
                        </Stack>
                    </Flex>
                    <Flex gap="5">
                    {/* padding='-50px' */}
                        <Image src={apple} alt="apple" width="200" ></Image>
                        <Image src={google} alt="google" width="180" ></Image>
                    </Flex>
                </Flex>
            </SimpleGrid>
            
        {/* </Box> */}
    </Box>
  )
}

export default Footer1