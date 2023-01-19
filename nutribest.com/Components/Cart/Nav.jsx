import { Box, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {MdLocationOn,MdPayment } from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useRouter } from "next/router";
import { ArrowBackIcon } from '@chakra-ui/icons';

export default function Nav() {
    const router = useRouter();
    const cartActive = router.pathname === "/cart" ? true : false;
    const addressActive = router.pathname === "/address" ? true : false;
    const paymentActive = router.pathname === "/payment" ? true : false;

    const backBtn=()=>{
        router.back()
    }
  return (
    <div>
        <HStack w='100%' boxShadow='base' p='5px' rounded='md' bg='white' >
            <Box position={'absolute'} left='20px' >
                <Image display={{base:'none',md:'block'}} border='0px'  w='15%' alt='logo' src='/images/logo_withname.png'/>
                <ArrowBackIcon display={{base:'block',md:'none'}} onClick={backBtn}/>
            </Box>
            <HStack border='0px' justifyContent={'center'} alignItems='center' w='100%' >
                <Box border='0px' textAlign={'center'} >
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        isDisabled={!cartActive && !paymentActive && !addressActive}
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<AiOutlineShoppingCart/>}
                        isRound={true}
                    />
                    <Text p='5px'color={cartActive || paymentActive || addressActive?'black':'gray'} >Cart</Text>
                </Box>

               <Box height={'1px'} w='10%' bg={ paymentActive || addressActive?'teal':'gray.300'}></Box>

                <Box textAlign={'center'}>
                    <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            isRound={true}
                            isDisabled={!addressActive && !paymentActive}
                            icon={<MdLocationOn/>}
                        />
                    <Text p='5px'color={addressActive || paymentActive ?'black':'gray'}>Address</Text>

                </Box>

                <Box height={'1px'} w='10%' bg={ paymentActive ?'teal':'gray.300'}></Box>

                <Box textAlign={'center'}>
                    <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Call Sage'
                            fontSize='20px'
                            isRound={true}
                            isDisabled={!paymentActive}
                            icon={<MdPayment/>}
                        />
                    <Text p='5px'color={paymentActive?'black':'gray'}>Payment</Text>

                </Box>
                
            </HStack>
        </HStack>
        
    </div>
  )
}
