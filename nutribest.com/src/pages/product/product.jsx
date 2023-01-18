import React from 'react'
import Sidebar from 'Components/ProductPageComp/Sidebar'
import {Box} from "@chakra-ui/react"
import ProductSlider from 'Components/ProductPageComp/ProductSlider'
const Product = () => {
  return (
    <>
    <div style={{display:"flex"}}>
       <Sidebar />
        <Box maxW={"80%"} ml={"20%"} border={'2px solid blue'} p={'15px'} >
        <ProductSlider />
        </Box>
    </div>
    </>
  )
}

export default Product