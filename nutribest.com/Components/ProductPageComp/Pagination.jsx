import {
  Text,
  Stack,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
} from "@chakra-ui/react";

const Pagination = ({
  totalpage,
  PageNo,
  changePage,
  handleLimit,
  DataLimit,
}) => {
  return (
    <Stack
      h={"40px"}
      w={"100%"}
      border={"0px solid red"}
      direction="row"
      display="flex"
      justifyContent="space-around"
    >
      <Button
        onClick={() => changePage(-1)}
        isDisabled={PageNo === 1}
        background="#68cacd"
        color="black"
        variant="solid"
      >
        {"<<"} PREV
      </Button>
      <Button
        style={{ borderRadius: "150%" }}
        background="#68cacd"
        color="black"
        variant="solid"
      >
        {PageNo} of {totalpage}
      </Button>
      <Button
        onClick={() => changePage(1)}
        isDisabled={PageNo == totalpage}
        background="#68cacd"
        color="black"
        variant="solid"
      >
        NEXT {">>"}
      </Button>
      <Flex shouldWrapChildren direction="row">
        <Text
          fontSize={{ base: "14px" , md:"16px", lg:"18px"}}
          m={"auto"}
          style={{
            fontWeight: "bolder",
            color: "#68cacd",
          }}
        >
          Products Per Page
        </Text>
        <NumberInput
          h={"40px"}
          style={{ width: "70px", fontWeight: "bolder" }}
          value={DataLimit}
          onChange={handleLimit}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
    </Stack>
  );
};

export default Pagination;
