import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Image,
  Link,
} from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  return (
    <Container maxW={"7xl"} py={10}>
      <SimpleGrid columns={2} spacing={10} p={10}>
        <Stack>
          <chakra.h1
            fontFamily={"DM Serif Display"}
            lineHeight={"55px"}
            fontSize={"5xl"}
            fontWeight={"bold"}
          >
            Our <chakra.span color="#ED531A">Best Delivered</chakra.span>{" "}
            categories
          </chakra.h1>
        </Stack>
        <Stack>
          <Text fontWeight={"bold"} fontSize="20px">
            It's not just about bringing you good food from restaurents, we
            deliver you experience
          </Text>
        </Stack>
      </SimpleGrid>
      <SimpleGrid
        columns={3}
        spacing={10}
        mx={10}
        my={10}
        align="center"
        alignItems={'center'}
      >
        <Stack>
          <Image src="1.png" width="250px" alt="Masala Chicken with some salad and delicious topping"/>
          <chakra.h3 fontWeight="bold" fontSize={"18px"}>
            Masala Chicken
          </chakra.h3>
          <Link href="#" fontWeight="bold" color="#ED531A">
            Order Now <IoIosArrowForward />
          </Link>
        </Stack>
        <Stack>
          <Image src="2.png" width="250px" alt="There is some soft beverages, This gives instant freshness"/>
          <chakra.h3 fontWeight="bold" fontSize={"18px"}>
            Soft Beverages
          </chakra.h3>
          <Link href="#" fontWeight="bold" color="#ED531A">
            Order Now <IoIosArrowForward />
          </Link>
        </Stack>
        <Stack>
          <Image src="3.png" width="250px" alt="Baked french fries"/>
          <chakra.h3 fontWeight="bold" fontSize={"18px"}>
            French Fries
          </chakra.h3>
          <Link href="#" fontWeight="bold" color="#ED531A">
            Order Now <IoIosArrowForward />
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Categories;
