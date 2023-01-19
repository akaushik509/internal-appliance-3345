import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const pr = [  {
  "active": true,
  "id": "B000QSNYGI",
  "product_title": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
  "product_price": "84.99",
  "product_original_price": null,
  "currency": "USD",
  "product_star_rating": 4.7,
  "product_num_ratings": 133056,
  "product_url": "https://www.amazon.com/dp/B000QSNYGI",
  "product_photo": "https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_UL960_QL65_.jpg",
  "product_num_offers": 12,
  "product_minimum_offer_price": "78.94",
  "is_best_seller": true,
  "is_prime": true,
  "climate_pledge_friendly": false
},
{
  "active": true,
  "id": "B000QSNYGI",
  "product_title": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
  "product_price": "84.99",
  "product_original_price": null,
  "currency": "USD",
  "product_star_rating": 4.7,
  "product_num_ratings": 133056,
  "product_url": "https://www.amazon.com/dp/B000QSNYGI",
  "product_photo": "https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_UL960_QL65_.jpg",
  "product_num_offers": 12,
  "product_minimum_offer_price": "78.94",
  "is_best_seller": true,
  "is_prime": true,
  "climate_pledge_friendly": false
},
{
  "active": true,
  "id": "B000QSNYGI",
  "product_title": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
  "product_price": "84.99",
  "product_original_price": null,
  "currency": "USD",
  "product_star_rating": 4.7,
  "product_num_ratings": 133056,
  "product_url": "https://www.amazon.com/dp/B000QSNYGI",
  "product_photo": "https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_UL960_QL65_.jpg",
  "product_num_offers": 12,
  "product_minimum_offer_price": "78.94",
  "is_best_seller": true,
  "is_prime": true,
  "climate_pledge_friendly": false
},
{
  "active": true,
  "id": "B000QSNYGI",
  "product_title": "Optimum Nutrition Gold Standard 100% Whey Protein Powder, Double Rich Chocolate, 5 Pound (Packaging May Vary)",
  "product_price": "84.99",
  "product_original_price": null,
  "currency": "USD",
  "product_star_rating": 4.7,
  "product_num_ratings": 133056,
  "product_url": "https://www.amazon.com/dp/B000QSNYGI",
  "product_photo": "https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_UL960_QL65_.jpg",
  "product_num_offers": 12,
  "product_minimum_offer_price": "78.94",
  "is_best_seller": true,
  "is_prime": true,
  "climate_pledge_friendly": false
},

]


export default function ProductSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <Slider {...settings}>
    {pr.map((el)=>(<ProductCard product={el}  />)) }
    </Slider>
  );
}