import React from 'react';
import style from "./Sidebar.module.css"
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

const Sidebar = () => {
    return (
      <Box className={style.sidebarfixed}>
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
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
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
                <Checkbox defaultChecked>4 Ratings & Above</Checkbox>
                <Checkbox defaultChecked>3 Ratings & Above</Checkbox>
                <Checkbox defaultChecked>2 Ratings & Above</Checkbox>
                <Checkbox defaultChecked>1 Ratings & Above</Checkbox>
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
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
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
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
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
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
              </AccordionPanel>
            </AccordionItem>

            {/* Concern */}

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
                    Concern
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
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
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Checkbox defaultChecked>Checkbox</Checkbox>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    );
}

export default Sidebar;
