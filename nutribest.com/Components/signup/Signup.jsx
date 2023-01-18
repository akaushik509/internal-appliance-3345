import { Box, Button ,Flex,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure} from '@chakra-ui/react'
import React from 'react'
import Cursol from './Cursol'
import Form from './Form'
import {  useSelector } from "react-redux";
import { useRouter } from 'next/router'
export default function Signup() {
  const { isLoggdIn } = useSelector((store)=>store.auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
 
  return (
    <>
      <Button onClick={onOpen} color='white' bg='teal.400'_hover={{bg:'teal'}} display={isLoggdIn?'none':'block'}>Login</Button>

      <Modal isOpen={isOpen && !isLoggdIn} onClose={onClose} size='4xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody border={'0px'}>
            
            <Flex justifyContent={{base:'center',md:'space-between'}} alignItems='center'>
                <Box w={{base:'0',md:'50%'}} display={{base:'none',md:'block'}}  >
                    <Cursol/>
                </Box>
                <Box border={'0px'}>
                    <Form/>
                </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
  
}