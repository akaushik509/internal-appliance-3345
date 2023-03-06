import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './IconWithNumber.module.css';

function IconWithNumber(props) {
  return (
    <Box className="icon-with-number">
      <AiOutlineShoppingCart className={props.iconClass} />
      {/* {props.number > 0 && <span>{props.number}</span>} */}
      <Text color={"red.400"} fontSize={"20px"} position={"absolute"} top={0} right={0}>{props.number > 0 && props.number}</Text>
    </Box>
  );
}

export default IconWithNumber;