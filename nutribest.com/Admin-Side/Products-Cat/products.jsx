import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductItems from "./products-item";
import axios from "axios";

const Products = () => {
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("WheyProtien");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, SetImage] = useState("");
  const [mid, msetId] = useState("");

  // on enter Search
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  };

  const handleToggleStatus = (id, active) => {
    axios
      .patch(`http://localhost:8080/${category}/${id}`, {
        active: !active,
      })
      .then((res) => {
        handleGetData();
        active
          ? toast({
              title: "Deactivated Successfully",
              status: "error",
              duration: 3000,
              isClosable: true,
            })
          : toast({
              title: "Activated Successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
      })
      .catch((err) => console.log(err));
  };

  // ``````````````````````````````````````````````````````` Editable Modal ````````````````````````````````
  const handleOpenDetails = (id, image, price, title) => {
    setTitle(title);
    setPrice(Math.floor(Number(price) * 60));
    SetImage(image);
    msetId(id);
    onOpen();
  };
  //````````````````````````````````````````````````````Update Listings```````````````````````````````````````````

  const handleGetData = () => {
    axios
      .get(`http://localhost:8080/${category}?_limit=10&_page=${page}`)
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleGetData();
  }, [page, category]);

  //```````````````````````````````````````````````````````````` submit modal data`````````````````````````````
  const handleSubmitModalDetails = () => {
    // console.log(String(Number(price / 60).toFixed(2)));
    // console.log(`http://localhost:8080/${category}/${mid}`);
    let dataToSend = {
      product_title: title,
      product_price: String(Number(price / 60).toFixed(2)),
      product_photo: image,
    };

    axios
      .patch(`http://localhost:8080/${category}/${mid}`, dataToSend)
      .then((res) => {
        handleGetData();
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

  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Products</Heading>
      <Text color={"#00b5b8"}>List of Products</Text>
      {/* Table of all products */}
      <Box mt={"30px"} w={"100%"}>
        <Box display={"flex"} justifyContent={"space-between"} mb={"20px"}>
          {/* input search */}
          <Input
            type={"text"}
            placeholder="Search Listings.."
            w={{ base: "40%", md: "35%", lg: "25%" }}
            onKeyDown={handleKeyDown}
          ></Input>
          {/* select option */}
          <Select
            // variant="flushed"
            bg="#0c0e1f"
            w={{ base: "45%", md: "25%", lg: "20%" }}
            cursor={"pointer"}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option style={{ backgroundColor: "#0c0e1f" }} value="WheyProtien">
              Proteins
            </option>
            <option style={{ backgroundColor: "#0c0e1f" }} value="Equipments">
              Gym Equipment
            </option>
            <option style={{ backgroundColor: "#0c0e1f" }} value="Ayurvedic">
              Ayurvedic
            </option>
            <option
              style={{ backgroundColor: "#0c0e1f" }}
              value="Healthy_Juice"
            >
              Healthy Juice
            </option>
            <option
              style={{ backgroundColor: "#0c0e1f" }}
              value="Protien-Foods"
            >
              Healthy Foods
            </option>
            <option style={{ backgroundColor: "#0c0e1f" }} value="Gainers">
              Gainers
            </option>
          </Select>
        </Box>

        {/* all products append */}

        <Box>
          <SimpleGrid gap={5}>
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"left"}
              boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
              padding={"10px"}
              mt={"20px"}
            >
              {/* <Box
                width={"6%"}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>S.NO</Text>
              </Box> */}
              <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>ID</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>IMAGE</Text>
              </Box>
              <Box
                width={{ base: "10%", md: "27%", lg: "25%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRODUCTS</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "7%", lg: "8%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRICE</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "15%", lg: "15%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>CATEGORY</Text>
              </Box>
              <Box
                w={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>STATUS</Text>
              </Box>
            </Box>
            {datas.map((el, i) => (
              <ProductItems
                key={el.id}
                i={i}
                {...el}
                handleOpenDetails={handleOpenDetails}
                handleToggleStatus={handleToggleStatus}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* `````````````````````````````````pagination`````````````````````````` */}
      <Box
        display={"flex"}
        width={{ base: "20%", md: "20%", lg: "15%" }}
        m={"auto"}
        mt={"10px"}
      >
        <Button
          size={{ base: "sm", md: "sm", lg: "md" }}
          colorScheme={"blue"}
          isDisabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <Text width={"40px"} m={"auto"} textAlign={"center"}>
          {page}
        </Text>
        <Button
          size={{ base: "sm", md: "sm", lg: "md" }}
          colorScheme={"blue"}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>

      {/* ``````````````````````````````````````````Modal`````````````````````````````````````` */}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "sm", md: "md" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Listing</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} textAlign={"center"}>
            <Avatar size={"2xl"} src={image}></Avatar>
            <Box textAlign={"left"}>
              <Text p={"10px"} cursor={"pointer"} mt={"10px"}>
                ID-{mid}
              </Text>
              <Text mt={"10px"}>Image:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={image}
                onChange={(e) => {
                  SetImage(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Title:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              >
                {/* Title- {modalDetail.product_title} */}
              </Input>
              <Text mt={"10px"}>Price:- </Text>
              <Input
                border={"1px solid"}
                cursor={"pointer"}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                  console.log(e.target.value);
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
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Products;
