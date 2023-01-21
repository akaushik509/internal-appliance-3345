import React, { useEffect , useState } from 'react'
import Sidebar from 'Components/ProductPageComp/Sidebar'
import { Box, Heading, Flex, onOpen, Button, SimpleGrid } from "@chakra-ui/react";
import axios from 'axios'
import ProductCard from 'Components/ProductPageComp/ProductCard';
import ProductPageCarousel from 'Components/ProductPageComp/ProductPageCarousel'
import SidebarDrawer from 'Components/ProductPageComp/SidebarDrawer'
import { useRouter } from 'next/router';


const Product = () => {
  const [Healthy_Juice ,setHealthy_Juice ] = useState([]);
  const [maxPrice, setmaxPrice] = useState(Infinity)   //Setting the maxprice for filter

  console.log("Healthy_Juice",Healthy_Juice)

  const PriceChange = (event , checkval) =>
  {
    event = Number(event);
    checkval = Number(checkval);

    console.log('invoked index')
    console.log("event", event);
    console.log('checkval', checkval);  
  }



  useEffect(()=>{
    getData()
  },[Healthy_Juice])


  // Funtion to get all the categories data with certain limit
  const getData = async()=>{
    let resHealthy_Juice = await axios.get('http://localhost:8080/Healthy_Juice?_limit=15');
    setHealthy_Juice(resHealthy_Juice.data)
  }

const router = useRouter();

const handleClick = (id)=>{
console.log("id",id)
router.push(`/juice/${id}`)
}

  return (
    <>
      <SidebarDrawer PriceChange={PriceChange} />

      <div style={{ display: "flex", marginTop: "120px" }}>
        <Sidebar PriceChange={PriceChange} />

        <Box
          w={{ base: "100%", md: "75%", lg: "80%" }}
          ml={{ base: "0px", md: "25%", lg: "20%" }}
          border={"2px solid blue"}
          p={["15px"]}
        >
          <ProductPageCarousel />
          <Flex m={"2"} border={"0px solid black"} w={"100%"}>
            <Heading
              color={"#3f3e3d"}
              fontWeight={["600", "500"]}
              fontSize={["21px", "23px", "30px"]}
            >
              Healthy Juice   
            </Heading>
          </Flex>
          <SimpleGrid
            columns={[2, 3, 3]}
            spacing="20px"
            border={"1px solid green"}
          >
            {Healthy_Juice.map((item) => (
              <ProductCard
                product={item}
                key={item.id}
                handleClick={handleClick}
              />
            ))}
          </SimpleGrid>
        </Box>
      </div>
    </>
  );
}

export default Product