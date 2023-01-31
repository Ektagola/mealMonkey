import React from "react";
import { Box, SimpleGrid, Stack, chakra } from "@chakra-ui/react";

const Order = () => {
  return (
    <Box
      maxW="full"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(footer.jpg)`}
      height={"120vh"}
      mt={10}
    >
      <Stack textAlign={"center"} pt={52}>
        <SimpleGrid columns={3}>
          <Stack></Stack>
          <Stack>
            <chakra.h1
              fontFamily={"DM Serif Display"}
              color={"white"}
              fontSize={"40px"}
              fontWeight={"bold"}
            >
              Enjoy <chakra.span color={"green.500"}>3000+</chakra.span> foods
              from <chakra.span color={"yellow.500"}>400</chakra.span>{" "}
              Restaurants
            </chakra.h1>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Order;
