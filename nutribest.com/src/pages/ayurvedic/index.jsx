import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../../Components/ProductPageComp/Sidebar";
import { Box, Heading, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../../Components/ProductPageComp/ProductCard";
import ProductPageCarousel from "../../Components/ProductPageComp/ProductPageCarousel";
import SidebarDrawer from "../../Components/ProductPageComp/SidebarDrawer";
import { useRouter } from "next/router";
import Pagination from "../../Components/ProductPageComp/Pagination";

const Product = () => {
  const [Ayurvedic, setAyurvedic] = useState([]);
  const [maxPrice, setmaxPrice] = useState(0); //Setting the maxprice for filter
  const [Rating, setRating] = useState(1); //Setting the Rating for filter
  const [PageNo, setPageNo] = useState(1); // Page State (Default value is 1)
  const [DataLimit, setDataLimit] = useState(12); // Limit State (Default value is 12);
  const [TotalPage, setTotalPage] = useState(0); // TotalPage according to limit and data;
  const [cartArray, setcartArray] = useState([]); // For adding to cart
  const [Review, setReview] = useState(0); // For setting the review;
  const [Discount, setDiscount] = useState(0); // For setting the discount;
  const [DiscountAccordingTo, setDiscountAccordingTo] = useState(""); // For setting the DiscountAccordingTo;
  const [currentUserId, setCurrentUserId] = useState(0); // get current user id
  const toast = useToast();

  const [getcart, setgetcart] = useState([])

  const PriceChange = (event, checkval) => {
    event = Number(event);
 
    if (checkval) {
      setmaxPrice(event);
    }

  };

  const RatingChange = (event, checkval) => {
    event = Number(event);
    
    if (checkval) {
      setRating(event);
    }
  
  };

  //Filter Function for Review
  const changeReview = (event, checkval) => {
    event = Number(event);
    console.log("Invoked Review function");
    console.log("checkval", checkval);
    console.log("event", event);
    if (checkval) {
      setDiscount(event);
    }
  };

  //Filter Function for Discount  (Cuuently not using this function we dont have discount key in backend)
  const changeDiscount = (event, checkval, accordingTo) => {
    event = Number(event);
    console.log("Invoked Discount function");
    console.log("event", event);
    console.log("accordingTo", accordingTo);

    if (checkval) {
      setReview(event);
      setDiscountAccordingTo(accordingTo);
    }
  };

  //For changing the DataLimit Per Page;
  const handleLimit = (DataLimit) => {
    if (DataLimit >= 6 && DataLimit <= 15) {
      setDataLimit(DataLimit);
    } else {
      setDataLimit(12);
    }
  };

  // For Changing The Page Number;
  const changePage = (val) => {
    let changeBy = Number(PageNo + val);
    setPageNo(changeBy);
  };

  // Funtion to get data of Healty juice
  const getData = useCallback(() => {
    axios
      .get(
        `http://localhost:8080/Ayurvedic?product_num_ratings_gte=${Review}&product_star_rating_gte=${Rating}&product_price_gte=${maxPrice}&_page=${PageNo}&_limit=${DataLimit}`
      )
      .then((res) => setAyurvedic(res.data));
  }, [DataLimit, PageNo, Rating, Review, maxPrice]);

let a = [];
  const AddedToCart = async(userId, id, newCartStatus, product) => {

    // console.log("asdfasdf", product)
    a = [...a, product]
    let userid = sessionStorage.getItem("LoggedUser_id") || "";
    //setgetcart([...getcart, { ...product, quantity: 1, cart: true }]);
    
     await axios.patch(`http://localhost:8080/User-Details/${userid}`,{
      Orders: a
    }) 
    console.log("after",a)
    



  };



 

  //Fetching all the data for getting TotalPage for pagination
  const FetchingDataForTotalPage = async () => {
    try {
      let res = await fetch(`http://localhost:8080/Ayurvedic`);
      let data = await res.json();
      // console.log("Total data of this Page", data);
      const val = Math.ceil(data.length / DataLimit);
      setTotalPage(Number(val));
    } catch (e) {
      console.log(e);
    }
  };

  const router = useRouter(); // Navigating to Single Product Page
  const handleClick = (id) => {
   
    router.push(`/ayurvedic/${id}`);
  };

  const getorders = async() =>{
    let userid = sessionStorage.getItem("LoggedUser_id") || "";
    let res = await axios.get(`http://localhost:8080/User-Details/${userid}`)
    setgetcart(res.data.Orders)
    
  }

  useEffect(() => {
    FetchingDataForTotalPage();
    getData();
    getorders()
    
    // GetUserOrders();
  }, [PageNo, DataLimit, Rating, maxPrice, Review]);

  return (
    <Box>
      <SidebarDrawer
        RatingChange={RatingChange}
        PriceChange={PriceChange}
        changeReview={changeReview}
        changeDiscount={changeDiscount}
      />
      <Box
        style={{ display: "flex" }}
        mt={{ base: "0px", md: "120px", lg: "120px" }}
      >
        <Sidebar
          RatingChange={RatingChange}
          PriceChange={PriceChange}
          changeReview={changeReview}
          changeDiscount={changeDiscount}
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
              AYURVEDIC
            </Heading>
          </Flex>
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "3" }}
            spacing="20px"
            border={"0px solid green"}
          >
            {Ayurvedic?.map((item) => (
              <ProductCard
                AddedToCart={AddedToCart}
                {...item}
                key={item.id}
                handleClick={handleClick}
                product={item}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <Box
        w={{ base: "100%", md: "75%", lg: "80%" }}
        m={"auto"}
        ml={{ base: "0px", md: "25%", lg: "20%" }}
        mb={"50px"}
        border={"0px solid blue"}
      >
        <Pagination
          totalpage={TotalPage}
          PageNo={PageNo}
          changePage={changePage}
          handleLimit={handleLimit}
          DataLimit={DataLimit}
        />
      </Box>
    </Box>
  );
};

export default Product;
