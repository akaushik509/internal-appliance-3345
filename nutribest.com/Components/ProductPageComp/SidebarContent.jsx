import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  Heading,
  Checkbox,
} from "@chakra-ui/react";


const SideBarContent = ({
  PriceChange,
  RatingChange,
  changeReview,
  changeDiscount,
}) => {
  // For Price Update
  const myPricevalchange = (e) => {
    // console.log("Invoked")
    // console.log(e.target.value, e.target.checked)
    PriceChange(e.target.value, e.target.checked);
  };

  // For Rating Update
  const myRatingchange = (e) => {
    // console.log("Invoked Rating");
    //console.log(e.target.value, e.target.checked);
    RatingChange(e.target.value, e.target.checked);
  };

  // For Review Update
  const myReviewChange = (e) => {
    console.log("Invoked Review");
    changeReview(e.target.value, e.target.checked);
  };

  // For Discount Update
  const myDiscountChange = (e,accTo) => {
   // console.log("Invoked Discount");
    changeDiscount(e.target.value, e.target.checked, accTo);
  };

  return (
    <Box border={"0px solid red"} pt={"20px"}>
      {/* Browse By */}

      <Box>
        <Heading color={"grey"} mb={"4"} fontWeight={"630"} fontSize={"18px"}>
          Browse By
        </Heading>
        <Accordion
          borderRadius={"5px"}
          border={"0.3px solid #d8d2d2"}
          allowMultiple
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Offers
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox>Creatine Monohydrate 250g @Rs 1079</Checkbox>
              <br />
              <br />
              <Checkbox>MB-VITE Daily Multivitamin 60 Tabs @ Rs 503</Checkbox>
              <br />
              <br />
              <Checkbox>MuscleBlaze Fish Oil 60 Softgels @ Rs 474</Checkbox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Discount */}

      <Box mt={"20px"}>
        <Heading color={"grey"} mb={"4"} fontWeight={"630"} fontSize={"18px"}>
          Filter Options
        </Heading>
        <Accordion
          borderRadius={"5px"}
          border={"0.3px solid #d8d2d2"}
          allowMultiple
        >
          {/* Ratings */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Ratings
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox onChange={(e) => myRatingchange(e)} value={4}>
                4 Ratings & Above
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myRatingchange(e)} value={3}>
                3 Ratings & Above
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myRatingchange(e)} value={2}>
                2 Ratings & Above
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myRatingchange(e)} value={1}>
                1 Ratings & Above
              </Checkbox>
              <br />
            </AccordionPanel>
          </AccordionItem>

          {/* Price */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Price
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox onChange={(e) => myPricevalchange(e)} value={10}>
                Above $10
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myPricevalchange(e)} value={20}>
                Above $20
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myPricevalchange(e)} value={35}>
                Above $35
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myPricevalchange(e)} value={45}>
                Above $45
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myPricevalchange(e)} value={0}>
                Reset
              </Checkbox>
              <br />
            </AccordionPanel>
          </AccordionItem>

          {/* Discount */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Discount
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox onChange={(e) => myDiscountChange(e, "lte")} value={20}>
                0-20%
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myDiscountChange(e, "gte")} value={20}>
                Above 20%
              </Checkbox>
              <br />
            </AccordionPanel>
          </AccordionItem>

          {/* Reviews */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Reviews
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox onChange={(e) => myReviewChange(e)} value={1000}>
                Above 1000
              </Checkbox>{" "}
              <br />
              <Checkbox onChange={(e) => myReviewChange(e)} value={5000}>
                Above 5000
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myReviewChange(e)} value={15000}>
                Above 15000
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myReviewChange(e)} value={30000}>
                Above 30000
              </Checkbox>
              <br />
              <Checkbox onChange={(e) => myReviewChange(e)} value={0}>
                Reset
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>

          {/* Stock Availability */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Heading
                  fontWeight={"600"}
                  fontSize={"17px"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Stock Availability
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox colorScheme={"green"} defaultChecked>
                Exclude Sold Out
              </Checkbox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SideBarContent