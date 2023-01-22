import React, { useState} from 'react';
import style from "./avijuice.module.css"
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addProduct } from '@/redux/SingleProduct/action';
import { Flex, Box, Heading, Button, Text, useToast  } from '@chakra-ui/react';

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
  const toast = useToast()
    const handleChangeWorkflow=(value)=>{
        workflow1.map((el)=>{
         if(el.title===value){
             setDataWorkFlow(el)
         }
        })
       }

       const handleAddToCart = (id, newCartStatus) => {
        
        return fetch(`http://localhost:8080/WheyProtien/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({cart:newCartStatus})
        }).then((res) =>{ 
          res.json()   
          toast({
            title: 'Added To Cart.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        });
        

      };

    /* console.log(product); */
    const {active,id,product_title,product_price,product_star_rating,climate_pledge_friendly,product_num_ratings,product_photo,product_minimum_offer_price,is_best_seller,cart} = product[0];
  return (
    <div>
        <Box width={"85%"} margin="auto" marginTop={"150px"} id={style.juice1} key={id}>
            <Flex gap={"40px"} width={"90%"} margin="auto" id={style.juice2}>
                <Box w="40%" h={"700px"} id={style.juice21}>
                  <Box w={"100%"} h="70%" id={style.juice211}  overflow={"hidden"} display="inline-flex"  >
                    <center><img src={product_photo} width="100%" height={"100%"} style={{objectFit:"cover"}} /></center>
                  </Box>
                  <Box id={style.juice212} width="40%" margin={"auto"} marginTop="30px" gap={"20px"} >
                    <Heading id={style.head} size={"md"}>Product Benefits</Heading>
                    <Heading id={style.head} size={"xs"}><span>✅</span>Comprise of MG</Heading>
                    <Heading id={style.head} size={"xs"}><span>✅</span>{climate_pledge_friendly?"Yes":"No"}</Heading>
                  </Box>
                </Box>
                <Box w="60%" id={style.juice22}>
                    <Heading size={"lg"} id={style.head} textAlign="justify" marginBottom="20px" >{product_title}</Heading>
                    <Heading size={"md"} id={style.head} marginBottom="20px"> Star Rating ⭐⭐⭐⭐{product_star_rating}</Heading>
                    <Heading size={"md"} id={style.head} marginBottom="20px"> Min. Price: $ {(product_minimum_offer_price)}</Heading>
                    <Heading size={"md"} id={style.head} marginBottom="20px"> Price: $ {(product_price)}</Heading>
                    <center><Button marginBottom="20px"  onClick={()=>handleAddToCart(id,true)}><img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/Buy.svg" />Add To Cart</Button></center> 
                    {/* <Flex gap={"30px"}>
                      <img src="https://static1.hkrtcdn.com/hknext/static/media/pdp/weight.svg" alt="err" />
                      <Heading id={style.head} size={"md"} marginTop="7px"> Weight</Heading>
                      <Button >KG</Button>
                    </Flex> */}

                    <Box w="500px" margin={"auto"} marginTop="30px" id={style.juice23}>
                      <Flex gap="5px" justifyContent={"center"} id={style.juice231} >
                        <Box w="50%" border={"1px solid gray"}  padding={"10px"} display={"grid"} alignItems={"center"} justifyContent="center">
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
              <Flex id={style.box90}>
                  
                  {workflow1.map((el) => {
                      return (
                          <Button id={style.btnwork}
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
                          
                          <Text id={style.head1}>{el.title}</Text>
                          </Button>
                      );
                      })}
              </Flex>
              <Flex marginTop="30px">
                  <Box >
                      <Box >    
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
    let res = await fetch("http://localhost:8080/WheyProtien");
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
    let res = await fetch(`http://localhost:8080/WheyProtien/?id=${id}`);
    let data = await res.json();
    return {
      props:{
        product:data,
      },
    }
  } 

 /*  export async function getServerSideProps(context) {
    console.log("context", context);
    const {
      params:{id},
    } = context;
    let res = await fetch(`http://localhost:8080/WheyProtien/?id=${id}`);
    let data = await res.json();
    return {
      props:{
        product:data,
      },
    }
  } */

export default Page 
