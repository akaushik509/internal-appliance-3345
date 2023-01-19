import React, { useEffect , useState } from 'react'
import Sidebar from 'Components/ProductPageComp/Sidebar'
import {Box,Heading,Flex} from "@chakra-ui/react"
import ProductSlider from 'Components/ProductPageComp/ProductSlider'
import axios from 'axios'
import ProductPageCarousel from 'Components/ProductPageComp/ProductPageCarousel'


const Product = () => {
  const [WheyProtien,setWheyProtien] = useState([]);
  const [Ayurvedic ,setAyurvedic ] = useState([]);
  const [Healthy_Juice ,setHealthy_Juice ] = useState([]);
  const [Gainers ,setGainers ] = useState([]);

  console.log("WheyProtien",WheyProtien)
  console.log("Ayurvedic",Ayurvedic)
  console.log("Healthy_Juice",Healthy_Juice)
  console.log("Gainers",Gainers)



  useEffect(()=>{
    getData()
  },[])

  // Funtion to get all the categories data with certain limit
  const getData = async()=>{
    let resWheyProtien = await axios.get('http://localhost:8080/WheyProtien?_limit=15');
    let resAyurvedic = await axios.get('http://localhost:8080/Ayurvedic?_limit=15');
    let resHealthy_Juice = await axios.get('http://localhost:8080/Healthy_Juice?_limit=15');
    let resGainers = await axios.get('http://localhost:8080/Gainers?_limit=15');
    
    setWheyProtien(resWheyProtien.data)
    setAyurvedic(resAyurvedic.data)
    setHealthy_Juice(resHealthy_Juice.data)
    setGainers(resGainers.data)
  }


  return (
    <>
    <div style={{display:"flex"}}>
       <Sidebar />

        <Box maxW={"80%"} ml={"20%"} border={'2px solid blue'} p={'15px'} >
        <ProductPageCarousel />
        <Flex m={'2'} border={'0px solid black'} w={'100%'} ><Heading color={'#3f3e3d'} fontWeight={'500'} fontSize={["16px","23px","30px"]} >Trending Now</Heading></Flex>
        <ProductSlider data={WheyProtien} />
         
        <Flex m={'2'} border={'0px solid black'} w={'100%'} ><Heading color={'#3f3e3d'} fontWeight={'500'}  fontSize={["16px","23px","30px"]} >Top Selling Supplements</Heading></Flex>
        <ProductSlider data={Ayurvedic} />
       
        <Flex m={'2'} border={'0px solid black'} w={'100%'} ><Heading color={'#3f3e3d'} fontWeight={'500'}  fontSize={["16px","23px","30px"]} >Top Selling In Multivitamins</Heading></Flex>
        <ProductSlider data={Healthy_Juice} />
        
        <Flex m={'2'} border={'0px solid black'} w={'100%'} ><Heading color={'#3f3e3d'} fontWeight={'500'}  fontSize={["16px","23px","30px"]} >Top Selling In Gainers</Heading></Flex>
        <ProductSlider data={Gainers} />

        <Flex m={'2'} border={'0px solid black'} w={'100%'} ><Heading color={'#3f3e3d'} fontWeight={'500'}  fontSize={["16px","23px","30px"]} >Top Selling In Ayurvedic</Heading></Flex>
        <ProductSlider data={Ayurvedic} />

        </Box>

    </div>
    </>
  )
}

export default Product