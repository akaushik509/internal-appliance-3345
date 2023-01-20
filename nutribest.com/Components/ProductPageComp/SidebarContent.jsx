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


const SideBarContent = ({ PriceChange }) => {

  const myvalchange = (e)=>{
    // console.log("Invoked")
    // console.log(e.target.value, e.target.checked)
    PriceChange(e.target.value, e.target.checked);
  }

  return (
    <>
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
              <Checkbox>Checkbox</Checkbox>
              <br />
              <Checkbox>Checkbox</Checkbox>
              <br />
              <Checkbox>Checkbox</Checkbox>
              <br />
              <Checkbox>Checkbox</Checkbox>
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
              <Checkbox>4 Ratings & Above</Checkbox>
              <br />
              <Checkbox>3 Ratings & Above</Checkbox>
              <br />
              <Checkbox>2 Ratings & Above</Checkbox>
              <br />
              <Checkbox>1 Ratings & Above</Checkbox>
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
              <Checkbox
                onChange={(e) => myvalchange(e)}
                value={1000}
              >
                Upto 1000
              </Checkbox>
              <br />
              <Checkbox
                onChange={(e) => myvalchange(e)}
                value={3000}
              >
                Upto 3000
              </Checkbox>
              <br />
              <Checkbox
                onChange={(e) => myvalchange(e)}
                value={5000}
              >
                Upto 5000
              </Checkbox>
              <br />
              <Checkbox
                onChange={(e) => myvalchange(e)}
                value={7000}
              >
                Upto 7000
              </Checkbox>
              <br />
              <Checkbox
                onChange={(e) => myvalchange(e)}
                value={Infinity}
              >
                7000 And Above
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
              <Checkbox>0-20%</Checkbox>
              <br />
              <Checkbox>20% And Above</Checkbox>
            </AccordionPanel>
          </AccordionItem>

          {/* Gender */}

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
                  Gender
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Checkbox>Male</Checkbox>
              <br />
              <Checkbox>Female</Checkbox>
              <br />
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
    </>
  );
};

export default SideBarContent