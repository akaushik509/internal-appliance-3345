import {
  Avatar,
  Box,
  Button,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const AccountInfo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = React.useRef(null);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  const [ids, setIds] = useState();
  let adminDetails = {};
  const handleSetData = (name, email, pass, image, phone, id) => {
    setIds(id);
    adminDetails = {
      Name: name,
      EmailId: email,
      Phone: phone,
      Password: pass,
      Image: image,
    };
    setUpdateData(adminDetails);
  };

  const [updateData, setUpdateData] = useState([]);
  const handleClick = () => setShow(!show);
  console.log(updateData);
  const getDetails = () => {
    axios
      .get(`http://localhost:8080/Admin-Details`)
      .then((res) => setDetails(res.data));
  };
  useEffect(() => {
    getDetails();
  }, []);

  const handleSendUpdatedData = () => {
    axios
      .patch(`http://localhost:8080/Admin-Details`, updateData)
      .then((res) => {
        getDetails();
        toast({
          title: "Updated Successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((res) => {
        toast({
          title: "Invalid Request",
          status: "Error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  console.log(details);
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>My Acccount</Heading>
      <Text color={"#00b5b8"}>My Account</Text>
      <Box textAlign={"center"} mt={"30px"}>
        <Avatar
          size={"2xl"}
          src={details.Image}
          alt={details.Name}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        ></Avatar>
        <SimpleGrid
          width={{ base: "90%", md: "85%", lg: "40%" }}
          m={"auto"}
          mt={"20px"}
          gap={3}
        >
          <Input color={"gray.600"} readOnly value={details.Name}></Input>
          <Input color={"gray.600"} readOnly value={details.EmailId}></Input>
          <Input color={"gray.600"} readOnly value={details.Phone}></Input>
          <InputGroup size="md">
            <Input
              color={"gray.600"}
              readOnly
              pr="4.5rem"
              type={show ? "text" : "password"}
              value={details.Password}
            />
            <InputRightElement width="4.5rem">
              <Box onClick={handleClick} cursor={"pointer"}>
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={() => {
              handleSetData(
                details.Name,
                details.EmailId,
                details.Password,
                details.Image,
                details.Phone,
                details.id
              );
              onOpen();
            }}
            colorScheme={"blue"}
          >
            Edit Details
          </Button>
          {/*````````````````````````````````````````````````````` modal````````````````````````````````````````````` */}
          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            ove
          >
            <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
            <ModalContent bg={"#0c0e1f"} color={"white"}>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6} textAlign={"center"}>
                <Avatar
                  size={"xl"}
                  src={updateData.Image}
                  name={updateData.Name}
                ></Avatar>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input
                    ref={initialRef}
                    value={updateData.Image}
                    onChange={(e) => {
                      setUpdateData({ ...updateData, Image: e.target.value });
                    }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    ref={initialRef}
                    value={updateData.Name}
                    onChange={(e) => {
                      setUpdateData({ ...updateData, Name: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Email Id</FormLabel>
                  <Input
                    value={updateData.EmailId}
                    onChange={(e) => {
                      setUpdateData({ ...updateData, EmailId: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Phone No.</FormLabel>
                  <Input
                    value={updateData.Phone}
                    onChange={(e) => {
                      setUpdateData({ ...updateData, Phone: e.target.value });
                    }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    value={updateData.Password}
                    onChange={(e) => {
                      setUpdateData({
                        ...updateData,
                        Password: e.target.value,
                      });
                    }}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    handleSendUpdatedData();
                    onClose();
                  }}
                >
                  Save
                </Button>
                <Button colorScheme={"red"} onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AccountInfo;
