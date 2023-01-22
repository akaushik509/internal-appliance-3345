import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay ,
    FormControl,
    Flex,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    useDisclosure,} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Center, Heading } from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
export default function Modalotp({handleDelete}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [user_id,setId]=useState(0)
    
    useEffect(()=>{
        const userId = localStorage.getItem('user_id')
        setId(userId)
    },[])

    return (
      <>
        <Button bg='teal.400' color={'white'} _hover={{bg: 'teal' }} onClick={onOpen}>Verify Account</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            
            <ModalCloseButton />
            <ModalBody>

            <Flex
            
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'sm'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={10}>
                    <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Email
                    </Heading>
                    </Center>
                    <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent code to your email
                    </Center>
                   
                    <FormControl>
                    <Center>
                        <HStack>
                        <PinInput>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
                        </HStack>
                    </Center>
                    </FormControl>
                    <Stack spacing={6}>
                    <Button
                        onClick={()=>{handleDelete(user_id)}}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Verify
                    </Button>
                    </Stack>
                </Stack>
            </Flex>
              
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
}



function Modalopt() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }