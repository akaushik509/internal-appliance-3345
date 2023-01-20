import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

import SideBarContent from "./SidebarContent";



function SidebarDrawer({ PriceChange }) {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  return (
    <>
      <Box display={{ base: "block", md: "none", lg: "none" }}>
        <Button ref={btnRef} onClick={onOpen}>
          ☰
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <SideBarContent PriceChange={PriceChange} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}

export default SidebarDrawer;
