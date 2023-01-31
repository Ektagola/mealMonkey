import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const BoxSide = () => {
  return (
    <Box
      maxW={"full"}
      bgColor={"#F17446"}
      position="sticky"
      top={0}
      px={10}
      py={2}
    >
      <HStack>
        <BiPhoneCall />
        <Text fontWeight="bold">Order Now - 112-235-8888!</Text>
      </HStack>
    </Box>
  );
};

export default BoxSide;
