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
    <Box width="100%" height={["2000px","2400px","1300px"]} marginTop="25px" padding="10px" justifyContent='center'>
        <Divider />
        <Box width="100%" height={["1000px","1200px","550px"]} >
            <SimpleGrid columns={{sm: 1, md: 1, lg:2}} justifyContent='center' height={["1200px","1200px","300px"]}>
                <Flex  width={["400px","800px"]} height="600px" justifyContent='flex-end'>
                    <Image src={mobile} alt='mobile' width={["450px","600px","800px"]} />
                </Flex>
                <Flex flexDirection="column" fontSize={["sm","sm", "md"]} height={["1000px","550px"]}  justifyContent="space-around" padding="30px"  width="90%" >
                    <Heading as="h2" fontSize={["sm", "md", "2xl"]} >Download the Healthkart Mobile app</Heading>
                    <Flex gap='5' >
                        <Image src={cart} alt='cart' width="50" />
                        <Stack >
                            <Heading as="h6" fontSize={["lg","sm", "2xl"]} >Easier, Faster Shopping</Heading>
                            <Text>Get Authentic supplements, Fitness solutions, and a healthy lifestyle</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={watch} alt='watch' width="50" />
                        <Stack>
                            <Heading as="h6" fontSize={["lg","sm","2xl"]} >Fuel your Fitness Goals</Heading>
                            <Text>Complete challenges to build habit & win HK cash</Text>
                        </Stack>
                    </Flex>
                    <Flex gap='5'>
                        <Image src={tick} alt='tick' width="50" />
                        <Stack>
                            <Heading as="h6" fontSize={["lg","sm", "2xl"]} >Get Exclusive App Only Benefits</Heading>
                            <Text>Extra discounts, offers and cashbacks</Text>
                        </Stack>
                    </Flex>
                    <Flex gap="5">
                    {/* padding='-50px' */}
                        <Image src={apple} alt="apple" width="160" ></Image>
                        <Image src={google} alt="google" width="150" ></Image>
                    </Flex>
                </Flex>
            </SimpleGrid>
        </Box>
        <Divider />
        <Box width="100%" marginTop="25px" height={["1800px","2400px","620px"]} margin="50" >
            <SimpleGrid columns={{sm: 1, md: 1, lg:2}} justifyContent='center' height={["300px"]} >
                <Flex flexDirection="column" width="70%" height="100%"  gap="20" >
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
                <Flex width="70%"  padding="30"  bg="#f6f6f6" borderRadius="15" >
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
            </SimpleGrid>
        </Box>
    </Box>
  )
}

export default Footer1