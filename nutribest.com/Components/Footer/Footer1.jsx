import { Box, Button, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
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
    <Box>
        <Divider />
        <Box width="100%" height="600px">
            <Flex justifyContent='center'>
                <Flex  width="40%" height="600px" justifyContent='flex-end'>
                    <Image src={mobile} alt='mobile' width="500" height="250"/>
                </Flex>
                <Flex flexDirection="column" gap="5" justifyContent="space-around" padding="30px"  width="40%" height="600px">
                    <Heading as="h2">Download the Healthkart Mobile app</Heading>
                    <Flex gap='5' >
                        <Image src={cart} alt='cart' width="50" />
                        <Stack >
                            <Heading as="h6" size="md">Easier, Faster Shopping</Heading>
                            <Text>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={watch} alt='watch' width="50" />
                        <Stack>
                            <Heading as="h6" size="md">Fuel your Fitness Goals</Heading>
                            <Text>Complete challenges to build habit & win HK cash</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={tick} alt='tick' width="50" />
                        <Stack>
                            <Heading as="h6" size="md">Get Exclusive App Only Benefits</Heading>
                            <Text>Extra discounts, offers and cashbacks</Text>
                        </Stack>
                    </Flex>
                    <Flex gap="5"  padding='-50px'>
                        <Image src={apple} alt="apple" width="200" ></Image>
                        <Image src={google} alt="google" width="190" ></Image>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
        <Divider />
        <Box width="100%" height="600px" margin="50">
            <Flex  justifyContent='center' height="100%" gap="10" >
                <Flex flexDirection="column" width="35%" height="100%"  gap="20" >
                    <Flex bg="#00b5b7"  borderRadius="15" height="45%" gap="10" width="100" padding="10">
                        <Flex flexDirection="column" gap="5"color="white">
                            <Heading as="h5">HK Premium</Heading>
                            <Text>Earn extra HK Cash & Enjoy more discounts and deals than anyone else!</Text>
                            <Button color='#00b5b7' >Be a part now!</Button>
                        </Flex>
                        <Box>
                            <Image src={thunder} alt='thunder' width="100" />
                        </Box>
                    </Flex>
                    <Flex bg="#f7f7f7"  borderRadius="15" height="45%" gap="10" width="100" padding="10">
                        <Flex flexDirection="column" gap="5">
                            <Heading as="h6" fontSize="xl">Refer & Earn</Heading>
                            <Text fontSize="sm">Tell your friends to shop at HealthKart. They get Rs.200 off when they shop with us the 1st time & you get Rs. 200 off on your next order.</Text>
                            <Button bg="#f6f6f6" rightIcon={<BsFillArrowRightCircleFill />}>Refer now!</Button>
                        </Flex>
                        <Box  marginTop="-90">
                            <Image src={boy} alt='boy' width="1000" height="400" />
                        </Box>
                    </Flex>
                </Flex>
                <Flex width="35%"  padding="30"  bg="#f6f6f6" borderRadius="15">
                    <Flex flexDirection="column" gap="10">
                        <Heading as="h2">Instant Assistance</Heading>
                        <Heading as="h5" fontSize="xl" color="#727c8e">Wish to seek advise from nutritionists and dietitians?</Heading>
                        <Button bg="#00b5b7" color="white">Book an Appointment</Button>
                        <Text fontSize="sm">*Get your customized nutrition and lifestyle plan</Text>
                    </Flex>
                    <Box marginTop="140">
                        <Image src={physician} alt='physician' width="950" height="80" />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default Footer1