import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


// const slideImages = [
//   {
//     "id": 1,
//     "img_url": "https://img9.hkrtcdn.com/22824/bnr_2282348_o.jpg",
//     "caption": "Muscle Blaze Peanut Butter"
//   },
//   {
//     "id": 2,
//     "img_url": "https://img1.hkrtcdn.com/22823/bnr_2282210_o.jpg",
//     "caption": "True Basics"
//   },
//   {
//     "id": 3,
//     "img_url": "https://img9.hkrtcdn.com/22823/bnr_2282218_o.jpg",
//     "caption": "Muscle Blaze"
//   },
//   {
//     "id": 4,
//     "img_url": "https://img1.hkrtcdn.com/22822/bnr_2282190_o.png",
//     "caption": "NitroTech"
//   }
// ];

const Carousel = ({ slideImages }) => {
  // console.log(slideImages.);
    return (
      <div className="slide-container" height="400px">
        <Slide height="90%">
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <Image src={slideImage.img_url} alt={slideImage.caption} width="100" height="80"/>
              {/* <div style={{'backgroundImage': `url(${slideImage.img_url})`}} height="90%">
                <span>{slideImage.caption}</span>
              </div> */}
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Carousel

export async function getServerSideProps() {
  let response = await fetch("http://localhost:3004/carousel");
  let data = await response.json();
  console.log(data.carousel);
  return {
      props: {
        slideImages: data,
      },
  };
}
