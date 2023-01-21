import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Coupan() {
  return (
    <div>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Flex as="span" flex='1' textAlign='left' >
                        <Image border={'0px'} src='https://static1.hkrtcdn.com/hknext/static/media/cart/discount-new.svg' alt='coupan img'/> 
                        <Text pl='10px'>Apply Coupan</Text>
                        
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Box>
                        <Image src={'/images/pay-1.png'} alt='Payment_1'/>
                        <Image src={'/images/pay-2.png'} alt='Payment_1'/>
                        <Image src={'/images/pay-3.png'} alt='Payment_1'/>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </div>
  )
}
