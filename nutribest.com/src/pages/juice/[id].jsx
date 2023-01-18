import React from 'react'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addWatch } from '@/redux/UserDetail/action';
import { Flex, Box } from '@chakra-ui/react';

const Page = ({product}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    console.log(product);
    const {active,id,product_title,product_price,product_star_rating,product_num_ratings,product_photo,product_minimum_offer_price,is_best_seller,is_prime} = product[0];
  return (
    <div>
        <Box>
            <Flex>
                <img src={product_photo}  />
                <Box>
                    <h1></h1>
                </Box>
            </Flex>
        </Box>
      {/* <h1>
        Product:{router.query.id}
      </h1>
      <img src={product_photo} alt="error" />
      <h1>{product_title}</h1>
      <h1>{product_price}</h1>
      <button onClick={() => {
            dispatch(addWatch({Title,Images,id,Plot}));
          }}>Add To Watchlist</button>
      <h3 onClick={()=>router.back()}>Go Back</h3> */}
    </div>
  )
}

/* export async function getStaticPaths(){
    let res = await fetch("https://mock-server-kkz2.onrender.com/product");
    let data = await res.json();
    return {
      paths:data.map((movie)=>({params:{id:movie.id.toString()}})),
      fallback:false,
    };
  } */
  
  export async function getServerSideProps(context) {
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
