import { Divider, Flex, GridItem, Heading, SimpleGrid, Image, Spacer, Stack, Text, VStack, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'
import NutriBest from "./NutriBest.jpeg";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import apple from "./Apple.png";
import google from "./google.png";
import Chat from 'Components/Chat';

const Footer2 = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Flex flexDirection="column" bg="#0d2122" width="100%" padding="15px" height={["2800px","1600px","800px"]} alignItems='center' >
        {/* <Box  w='15%' h='100%'> */}
            <Image src="https://i.ibb.co/KNkk7GQ/logo-withname.png" alt="NutriBest" width='200' height='40' />
        {/* </Box> */}
        <SimpleGrid columns={[1, 2, 6]} w="80%" h={["60%"]} gap={6}  color="#7d8788" fontWeight="bold" marginTop="10">
            <GridItem >
                <VStack fontSize='14px' padding="5" >
                    <Heading as="h6" fontSize="md" color="white">HealthKart</Heading>
                    <Text>About Us</Text>
                    <Text>Contact Us</Text>
                    <Text>Refer & Earn</Text>
                    <Text>Loyalty Program</Text>
                    <Text>HK Consult</Text>
                    <Text>Blogs, Videos & More</Text>
                    <Text>Brand Directory</Text>
                    <Text>Careers</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md" color="white">Brands</Heading>
                    <Text>MuscleBlaze</Text>
                    <Text>Fit Foods</Text>
                    <Text>HK Vitals</Text>
                    <Text>TrueBasics</Text>
                    <Text>Gritzo</Text>
                    <Text>bGREEN</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md" color="white">Health & Fitness</Heading>
                    <Text>Bodybuilding</Text>
                    <Text>Hair & Skin Care</Text>
                    <Text>Sports Nutrition</Text>
                    <Text>Supplements</Text>
                    <Text>Ayurveda & Herbs</Text>
                    <Text>Health Food & Drinks</Text>
                    <Text>Fitness</Text>
                    <Text>Wellness</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5">
                    <Heading as="h6" fontSize="md" color="white">Quick Links</Heading>
                    <Text>My Account</Text>
                    <Text>Track Your Order</Text>
                    <Text>Store Locator</Text>
                    <Text>HK Cash</Text>
                    <Text>HK Consult</Text>
                    <Text>HK Coupons</Text>
                    <Text>FAQs</Text>
                    <Text>Sell On HealthKart</Text>
                </VStack>
            </GridItem>
            <GridItem >
                <VStack fontSize='14px' padding="5" >
                    <Heading as="h6" fontSize="md" color="white">Contact Us</Heading>
                    <Flex gap="2">
                        <GrMail />
                        <Text>care@healtkart.com</Text>
                    </Flex>
                    <Flex gap="2"  width="100%">
                        <BsFillTelephoneFill />
                        <Text>0124-4616444</Text>
                    </Flex>
                    <Flex gap="2">
                        <MdLocationPin size="2xl"/>
                        <Text>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</Text>
                    </Flex>    
                    {/* <Button border="none" background="none" fontSize='14px' leftIcon={<GrMail />}>care@healthkart.com</Button>
                    <Button border="none" background="none" fontSize='14px' leftIcon={<BsFillTelephoneFill />}>0124-4616444</Button>
                    <Button w="10" border="none" background="none" fontSize='14px' leftIcon={<HiLocationMarker />}>The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana</Button> */}
                </VStack>
            </GridItem>
            <GridItem>
                    <Image src="https://245.tech/wp-content/uploads/2021/01/Google-Play-vs-Apple-Store-2.png" alt="apple" width="200" ></Image>
                    {/* <Image src={apple} alt="apple" width="200" ></Image>
                    <Image src={google} alt="google" width="190" ></Image> */}
                    <Button onClick={onOpen} colorScheme='teal'>Talk to Customer Care 👨‍💻</Button>
                    {/* <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent w={"400px"}>
                            <ModalHeader>Speak With Customer Service</ModalHeader>
                            <ModalCloseButton />
                                <ModalBody >
                                    <Chat />
                                </ModalBody>
                        </ModalContent>
                    </Modal> */}
                    {/* <Chat /> */}
            </GridItem>
        </SimpleGrid>
        <Stack direction={['column','column', 'row']} marginTop={["280px", "100px", "20px"]} >
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay1.svg" alt="UPI" width="50" height={10}/>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay2.svg" alt="VISA" width="50" height={10}/>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay3.svg" alt="MAsterCard" width="50" height={10}/>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay4.svg" alt="Netbanking" width="50" height={10}/>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay5.svg" alt="EMI option" width="50" height={10}/>
            <Image src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pay6.svg" alt="Cash On Delivery" width="50" height={10}/>
        </Stack>
        <Divider marginTop={["100px", "70px", "30px"]} />
        <Flex direction={['column','column', 'row']} w="100%" color="#7d8788" marginTop="10px" justifyContent="space-around" >
            <Stack>
                <Text>Copyright © 2023, HealthKart.com, or its affiliates</Text>
            </Stack>
            <Stack direction={['column','row']}>
                <Text>Terms & Conditions</Text>
                <Text>|</Text>
                <Text>Delivery Policy</Text>
                <Text>|</Text>
                <Text>Privacy Policy</Text>
                <Text>|</Text>
                <Text>Disclaimer</Text>
                <Text>|</Text>
                <Text>Returns Policy</Text>
            </Stack>             
        </Flex>
    </Flex>
  )
}

export default Footer2