import {
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React from "react";

const Serve = () => {
  return (
    <Container maxW={"7xl"} my={10} textAlign={"center"}>
      <chakra.h1
        fontSize={"4xl"}
        fontFamily={"DM Serif Display"}
        fontWeight={"bold"}
      >
        How we <chakra.span color={"#ED531A"}>Serve</chakra.span> you
      </chakra.h1>
      <SimpleGrid columns={3} spacing={10}>
        <Stack px={10} py={10}>
          <Image src="package1.png" width={"270px"} />
          <chakra.h1 fontWeight={"bold"}>Automated Packaging</chakra.h1>
          <Text fontWeight={"bold"} color={"gray.500"}>
            100% environment friendly packing
          </Text>
        </Stack>
        <Stack px={10} py={10}>
          <Image src="package2.png" width={"270px"} />
          <chakra.h1 fontWeight={"bold"}>Packed with Love</chakra.h1>
          <Text fontWeight={"bold"} color={"gray.500"}>
            We deliver the best experience
          </Text>
        </Stack>
        <Stack px={10} py={10}>
          <Image src="package3.png" width={"270px"} />
          <chakra.h1 fontWeight={"bold"}>Serve hot Appetite</chakra.h1>
          <Text fontWeight={"bold"} color={"gray.500"}>
            Promise deliver within 30 mins
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Serve;
