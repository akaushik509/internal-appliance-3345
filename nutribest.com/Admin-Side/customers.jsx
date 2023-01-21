import {
  Avatar,
  Box,
  Heading,
  Image,
  Input,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Customers = () => {
  const [customerData, setCustomerData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mid, msetId] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [image, setImage] = useState("");
  const [contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const toast = useToast();
  // fetch user data
  const handleGetUserData = () => {
    axios
      .get(`http://localhost:8080/User-Details`)
      .then((res) => setCustomerData(res.data));
  };
  // on Enter Search
  const handleSearchData = (e) => {
    let data_input = e.target.value.split("");
    let convert = data_input[0]?.toUpperCase();
    data_input[0] = convert;
    let searchedData = data_input.join("");
    if (e.key == "Enter") {
      searchTheData(searchedData, e.target.value);
    }
  };
  const searchTheData = async (searchedData, e) => {
    let res = await axios.get(`http://localhost:8080/User-Details`);
    let data = await res.data;
    data = data.filter((el) => {
      return (
        el.Name.match(searchedData) || el.Email.match(e) || el.Phone.match(e)
      );
    });
    setCustomerData(data);
    // console.log(data);
  };
  // ``````````````````````````````````````````````````````` Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, Image, Password, Name, Phone, Email) => {
    setName(Name);
    setPass(Password);
    setImage(Image);
    msetId(id);
    setContact(Phone);
    setEmail(Email);
    onOpen();
  };
  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````

  const handleSubmitModalDetails = () => {
    let dataToSend = {
      Name: name,
      Phone: contact,
      Email: Email,
      Image: image,
      Password: pass,
    };
    axios
      .patch(`http://localhost:8080/User-Details/${mid}`, dataToSend)
      .then((res) => {
        handleGetUserData();
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

  useEffect(() => {
    handleGetUserData();
  }, []);

  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Customers</Heading>
      <Text color={"#00b5b8"}>List of Customers</Text>

      <Box mt={"30px"} width={{ base: "100%", md: "50%", lg: "30%" }}>
        <Input
          onKeyDown={handleSearchData}
          placeholder="Search Users..."
        ></Input>
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
        p="10px"
        mb={"20px"}
        mt={"30px"}
      >
        <Box
          width={{ base: "5%", md: "7%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>S.NO</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "12%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>IMAGE</Text>
        </Box>
        <Box
          width={{ base: "7%", md: "15%", lg: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>NAME</Text>
        </Box>

        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
        >
          <Text>CONTACT</Text>
        </Box>

        <Box
          width={{ base: "15%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>EMAIL</Text>
        </Box>
        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>PASSWORD</Text>
        </Box>
        <Box
          width={{ base: "20%", md: "15%" }}
          fontSize={{ base: "12px", md: "11px", lg: "14px" }}
          textAlign={"center"}
        >
          <Text>ADDRESS</Text>
        </Box>
      </Box>

      {customerData.map((el, i) => (
        <Box
          key={Math.random()}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          p="10px"
          mb={"10px"}
          width={"100%"}
          cursor={"pointer"}
          onClick={() => {
            handleOpenDetails(
              el.id,
              el.Image,
              el.Password,
              el.Name,
              el.Phone,
              el.Email
            );
          }}
        >
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              width={{ base: "5%", md: "7%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{i + 1}</Text>
            </Box>
            <Box
              width={{ base: "8%", md: "12%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Avatar src={el.Image} name={el.Name}></Avatar>
            </Box>
            <Box
              width={{ base: "7%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{el.Name}</Text>
            </Box>

            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text as={"mark"}>{el.Phone}</Text>
            </Box>

            <Box
              width={{ base: "15%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{el.Email}</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "13%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{el.Password}</Text>
            </Box>
            <Box
              width={{ base: "20%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{el.Address}</Text>
            </Box>
          </Box>
          {/*``````````````````````````` Small Screen Data```````````````````````` */}
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent={"space-between"}
            p={"10px"}
          >
            {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
            <Box width={{ base: "30%", sm: "40%" }}>
              <Box
                h="25px"
                width={"78px"}
                border={"1px solid green"}
                bg={"green.500"}
                mb={"10px"}
                color="black"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                  User Details
                </Text>
              </Box>
              <Avatar
                size={{ base: "lg", sm: "2xl" }}
                src={el.Image}
                name={el.Name}
              ></Avatar>
            </Box>
            {/* ```````````````````````````````````right Div````````````````````````````` */}
            <Box
              w={{ base: "60%", sm: "60%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
            >
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  {el.Name}
                </Text>
                <Text
                  as={"mark"}
                  mt={"10px"}
                  fontSize={{ base: "12px", sm: "13px" }}
                >
                  {el.Phone}
                </Text>
                <Text
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                  color={"green.500"}
                >
                  Mail-{el.Email}
                </Text>
                <Text
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  Pass-{el.Password}
                </Text>
                <Text mt={"10px"} fontSize={{ base: "13px", sm: "14px" }}>
                  {el.Address}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      {/* ``````````````````````````````````````` Modal`````````````````````````````` */}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent bg={"#0c0e1f"} color={"white"}>
          <ModalHeader>Edit Details</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Name:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Phone:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              ></Input>
              <Text mt={"10px"}>Email:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
              <Text mt={"10px"}>Password:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              >
                {/* Price- Rs {Math.floor(Number(modalDetail.product_price) * 60)} */}
              </Input>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmitModalDetails();
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
    </Box>
  );
};

export default Customers;
