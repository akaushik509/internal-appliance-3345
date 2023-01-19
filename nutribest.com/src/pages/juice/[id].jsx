import React, { useState} from 'react';

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { Flex, Box, Heading, Button, Text } from '@chakra-ui/react';

import Footer2 from 'Components/Footer/Footer2';


const workflow1 = [
  
  {
    title: "Product Details",
    content:
      "MuscleBlaze Super Gainer XXL Chocolate is crafted especially for hardcore fitness enthusiasts who work hard to gain big and sturdy muscles and a sculpted physique. This advanced formula offers 15g protein per 100g serving. It has a blend of fast and slow-releasing proteins It offers 75g of simple and complex carbs per serving of 100g that ensures a robust and sustained calorie release in your body to fuel your muscles for a longer duration MuscleBlaze Super Gainer XXL is enriched with 27 vital vitamins and minerals that help in boosting the immunity and regulating enzymes in your body. Available in scrumptious chocolate flavor, MuscleBlaze Super Gainer XXL is free from any added sugars and trans fats",
  },

  {
    title: "Product Information",
    logo: "https://hkprod.s3.amazonaws.com/21232/bnr_2123154_o.jpg",
    content:
      "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
  },

  {
    title: "Other Information",
    logo: "http://hkprod.s3.amazonaws.com/12075/normal_1207449_o.jpg",
    content:
      "MuscleBlaze Super Gainer XXL is a high-calorie sports nutrition supplement which is the perfect way to gain sturdy muscles. The unique blend of protein and complex carbs in 1:5 ratio provides with the fuel to muscles for quick recovery and muscle synthesis. The calories are derived from the clean and high-quality carbs and there is zero added sugar in it so that you can be sure that each serving is composed of nothing but the best. With the power of 27 vitamins and minerals, this mass gain formula is crafted to lift your muscles inches and weight by impressive numbers.",
  },

  {
    title: "FAQ's",
    content:
      "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
  },
];

const Page = ({product}) => {

  const [dataWorkflow, setDataWorkFlow] = useState(workflow1[0]);
    const handleChangeWorkflow=(value)=>{
        workflow1.map((el)=>{
         if(el.title===value){
             setDataWorkFlow(el)
         }
        })
       }
    const dispatch = useDispatch();
    const router = useRouter();
    console.log(product);
    const {active,id,product_title,product_price,product_star_rating,climate_pledge_friendly,product_num_ratings,product_photo,product_minimum_offer_price,is_best_seller,is_prime} = product[0];
  return (
    <div>
        <Box width={"85%"} margin="auto" marginTop={"20px"}>
            <Flex gap={"50px"} border="1px solid red" width={"90%"} margin="auto">
                <Box border="1px solid black" w="40%" h={"700px"}>
                  <Box w={"95%"} h="80%" border="1px solid red" overflow={"hidden"}display="inline-flex" >
                    <center><img src={product_photo} style={{objectFit:"cover"}} /></center>
                  </Box>
                  <Box border={"1px solid blue"} width="40%" margin={"auto"} marginTop="30px" gap={"20px"}>
                    <Heading size={"md"}>Product Benefits</Heading>
                    <Heading size={"xs"}><span>✅</span>Comprise of MG</Heading>
                    <Heading size={"xs"}><span>✅</span>{climate_pledge_friendly?"Yes":"No"}</Heading>
                  </Box>
                </Box>
                <Box border={"1px solid yellow"} w="60%">
                    <Heading size={"lg"} textAlign="justify" marginBottom="20px" >{product_title}</Heading>
                    <Heading size={"md"} marginBottom="20px"> Star Rating ⭐⭐⭐⭐{product_star_rating}</Heading>
                    <Heading size={"md"} marginBottom="20px"> Min. Price: Rs.{Number(product_minimum_offer_price).toFixed(2)*80}</Heading>
                    <Heading size={"md"} marginBottom="20px"> Price: Rs.{Number(product_price).toFixed(2)*80}</Heading>
                    <Button marginBottom="20px"><img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Buy.svg" onClick={() => {dispatch(addProduct({product_title,product_price,id,product_photo}))}} /> Add To Cart</Button>
                    <Flex gap={"30px"}>
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" alt="err" />
                      <Heading size={"md"} marginTop="7px"> Weight</Heading>
                      <Button>KG</Button>
                    </Flex>

                    <Box border={"1px solid red"} w="500px" margin={"auto"} marginTop="30px">
                      <Flex gap="10px" justifyContent={"center"} >
                        <Box border={"1px solid gray"} w="50%"  padding={"10px"} display={"grid"} alignItems={"center"} justifyContent="center">
                          <img style={{ margin:"auto", marginBottom:"15px"}} src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg" alt="Error" />
                          <p>Lic. No. 10015064000576</p>
                        </Box>
                        <Box border={"1px solid gray"} padding={"10px"} w="50%" display={"grid"} alignItems={"center"} justifyContent="center">
                          <h3 style={{marginBottom:"15px"}}>Country of Origin</h3>
                          <Flex alignItems={"center"} justifyContent="center">
                            <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/indian_flag.svg" alt="Error" />
                            <Heading size={"sm"}>India</Heading>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                </Box>
            </Flex>

            <Box w="90%" margin={"auto"} marginTop="30px">
              <Flex id="box9-0">
                  
                  {workflow1.map((el) => {
                      return (
                          <Button id="btnwork"
                          onClick={()=>{handleChangeWorkflow(el.title)}}
                          borderBottom={
                              dataWorkflow.title === el.title ? "4px solid #5034ff" : ""
                          }
                          
                          width="100%"
                          height="100%"
                          color="grey"
                          p="15px"
                          display="flex"
                          flexDirection={"column"}
                          bg="white"
                          >
                          
                          <Text>{el.title}</Text>
                          </Button>
                      );
                      })}
              </Flex>
              <Flex id="box9-1" border={"1px solid red"} marginTop="30px">
                  <Box id="box9-1b">
                      <Box id="box9-1c">    
                          <Text color="#6d6dff" fontSize="30px" >{dataWorkflow.title}</Text>
                      </Box>
                      <Text color="grey" marginTop="20px" fontSize="20px">{dataWorkflow.content}</Text>
                      <img width="100%" height={"3%"} src={dataWorkflow.logo}></img>
                  </Box>
              </Flex>
            </Box>
            
        </Box>
        <Footer2/>
    </div>
  )
}

 export async function getStaticPaths(){
    let res = await fetch("http://localhost:8080/Healthy_Juice");
    let data = await res.json();
    return {
      paths:data.map((movie)=>({params:{id:movie.id.toString()}})),
      fallback:false,
    };
  } 
  
  export async function getStaticProps(context) {
    console.log("context", context);
    const {
      params:{id},
    } = context;
    let res = await fetch(`http://localhost:8080/Healthy_Juice/?id=${id}`);
    let data = await res.json();
    return {
      props:{
        product:data,
      },
    }
  }

export default Page 
