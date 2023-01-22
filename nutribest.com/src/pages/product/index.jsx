import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "Components/ProductPageComp/Sidebar";
import { Box, Heading, Flex, onOpen, Button } from "@chakra-ui/react";
import ProductSlider from "Components/ProductPageComp/ProductSlider";
import axios from "axios";
import ProductPageCarousel from "Components/ProductPageComp/ProductPageCarousel";
import SidebarDrawer from "Components/ProductPageComp/SidebarDrawer";

const Product = () => {
  const [WheyProtien, setWheyProtien] = useState([]);
  const [Ayurvedic, setAyurvedic] = useState([]);
  const [Healthy_Juice, setHealthy_Juice] = useState([]);
  const [Gainers, setGainers] = useState([]);
  const [maxPrice, setmaxPrice] = useState(0); //Setting the maxprice for filter
  const [Rating, setRating] = useState(1); //Setting the Rating for filter
  const [cartArray, setcartArray] = useState([]); // For adding to cart
  const [Review, setReview] = useState(0); // For setting the review;

  console.log("WheyProtien", WheyProtien);
  console.log("Ayurvedic", Ayurvedic);
  console.log("Healthy_Juice", Healthy_Juice);
  console.log("Gainers", Gainers);

  // Filter function of Product Price
  const PriceChange = (event, checkval) => {
    event = Number(event);
    //console.log("Invoked PriceChange function");
    // console.log("event", event);
    // console.log("checkval", checkval);
    if (checkval) {
      setmaxPrice(event);
    }
    console.log("Maxprice", maxPrice);
  };

  // Fiter function of Rating
  const RatingChange = (event, checkval) => {
    event = Number(event);
    // console.log("Invoked RatingChange function");
    // console.log("event", event);
    // console.log("checkval", checkval);
    if (checkval) {
      setRating(event);
    }
    console.log("Rating", Rating);
  };

  //Filter Function for Review
  const changeReview = (event, checkval) => {
    event = Number(event);
    console.log("Invoked Review function");
    console.log("event", event);

    if (checkval) {
      setReview(event);
    }
  };

  // Function to add the product to cart
  const AddedToCart = async (id, item) => {
    setcartArray([...cartArray, { ...item, quantity: 1, cart: true }]);
    console.log("cartarray", cartArray);
    try {
      let res = await axios(`http://localhost:8080/User-Details/${id}`, {
        method: "patch",
        data: { Orders: cartArray },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [Rating, maxPrice, Review]);

  // Funtion to get all the categories data with certain limit
  const getData = async () => {
    let resWheyProtien = await axios.get(
      `http://localhost:8080/WheyProtien?product_num_ratings_gte=${Review}&product_star_rating_gte=${Rating}&product_price_gte=${maxPrice}&_limit=15`
    );
    let resAyurvedic = await axios.get(
      `http://localhost:8080/Ayurvedic?product_num_ratings_gte=${Review}&product_star_rating_gte=${Rating}&product_price_gte=${maxPrice}&_limit=15`
    );
    let resHealthy_Juice = await axios.get(
      `http://localhost:8080/Healthy_Juice?product_num_ratings_gte=${Review}&product_star_rating_gte=${Rating}&product_price_gte=${maxPrice}&_limit=15`
    );
    let resGainers = await axios.get(
      `http://localhost:8080/Gainers?product_num_ratings_gte=${Review}&product_star_rating_gte=${Rating}&product_price_gte=${maxPrice}&_limit=15`
    );

    setWheyProtien(resWheyProtien.data);
    setAyurvedic(resAyurvedic.data);
    setHealthy_Juice(resHealthy_Juice.data);
    setGainers(resGainers.data);
  };

  return (
    <>
      <SidebarDrawer
        RatingChange={RatingChange}
        PriceChange={PriceChange}
        changeReview={changeReview}
      />

      <Box
        style={{ display: "flex" }}
        mt={{ base: "0px", md: "120px", lg: "120px" }}
      >
        <Sidebar
          RatingChange={RatingChange}
          PriceChange={PriceChange}
          changeReview={changeReview}
        />

        <Box
          w={{ base: "100%", md: "75%", lg: "80%" }}
          ml={{ base: "0px", md: "25%", lg: "20%" }}
          border={"0px solid blue"}
          p={["15px"]}
        >
          <ProductPageCarousel />
          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Trending Now
            </Heading>
          </Flex>
          <ProductSlider data={WheyProtien} AddedToCart={AddedToCart} />

          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Top Selling Supplements
            </Heading>
          </Flex>
          <ProductSlider data={Ayurvedic} AddedToCart={AddedToCart} />

          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Top Selling In Multivitamins
            </Heading>
          </Flex>
          <ProductSlider data={Healthy_Juice} AddedToCart={AddedToCart} />

          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Top Selling In Gainers
            </Heading>
          </Flex>
          <ProductSlider data={Gainers} AddedToCart={AddedToCart} />

          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Top Selling In Ayurvedic
            </Heading>
          </Flex>
          <ProductSlider data={Ayurvedic} AddedToCart={AddedToCart} />
        </Box>
      </Box>
    </>
  );
};

export default Product;
