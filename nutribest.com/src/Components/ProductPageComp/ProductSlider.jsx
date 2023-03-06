import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default function ProductSlider({
  data,
  // , handleClick, AddedToCart
}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data?.map((el) => {
        if (el.active) {
          return (
            <ProductCard
              // AddedToCart={AddedToCart}
              // handleClick={handleClick}
              {...el}
              key={el.product_num_ratings}
            />
          );
        }
      })}
    </Slider>
  );
}
