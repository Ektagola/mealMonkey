import React from "react";
import {
  Container,
  Image,
  SimpleGrid,
  Text,
  Stack,
  chakra,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaMotorcycle, FaShoppingBag } from "react-icons/fa";
import { AiFillPlayCircle, AiOutlineSearch } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";

const Banner = () => {
  return (
    <Container maxW={"7xl"} py={10}>
      <SimpleGrid columns={3} spacing={5}>
        <Stack>
          <chakra.h1
            lineHeight={"60px"}
            fontSize={"6xl"}
            fontFamily={"DM Serif Display"}
            fontWeight={"semi-bold"}
          >
            Fastest <chakra.span color="#ED531A">Delivery</chakra.span> & Easy{" "}
            <chakra.span color="#ED531A">Pickup</chakra.span>
          </chakra.h1>
          <HStack py={10}>
            <Image src="men.png" width="100px" borderRadius={"50px"} />
            <Text px={5} fontWeight="bold">
              When you are too lazy to cook, We are just a click away!
            </Text>
          </HStack>
          <HStack>
            <Button
              color="white"
              bgColor="#38A371"
              borderRadius={"50px"}
              _hover={{
                bgColor: "#3C926A",
              }}
              leftIcon={<AiOutlineSearch />}
            >
              | Find Restaurants
            </Button>
            <Button borderRadius={"50px"}>
              <AiFillPlayCircle
                size="30px"
                style={{
                  borderLeft: "5px",
                  borderStyle: "solid",
                  borderColor: "#ED531A",
                  borderRadius: "40px"
                }}
                px={5}
              />{" "}
              How to order
            </Button>
          </HStack>
        </Stack>
        <Stack rounded={"full"}>
          <Image src="banner.png" />
        </Stack>
        <Stack maxW={"300px"} fontFamily={"DM Serif Display"}>
          <VStack>
            <HStack pt={10}>
              <FaMotorcycle size={"30px"} />
              <VStack fontWeight="bold" align="start" px={10}>
                <chakra.h3>Fast delivery</chakra.h3>
                <Text color={"gray.600"} fontSize={"14px"}>
                  Promise to deliver within 30 mins
                </Text>
              </VStack>
            </HStack>
            <HStack pt={10}>
              <FaShoppingBag size={"30px"} />
              <VStack fontWeight="bold" align="start" px={10}>
                <chakra.h3>Pick up</chakra.h3>
                <Text color={"gray.600"} fontSize={"14px"}>
                  Pickup delivery at your doorstep
                </Text>
              </VStack>
            </HStack>
            <HStack pt={10}>
              <ImSpoonKnife size={"30px"} />
              <VStack fontWeight="bold" align="start" px={10}>
                <chakra.h3>Dine in</chakra.h3>
                <Text color={"gray.600"} fontSize={"14px"}>
                  Enjoy your food fresh crispy and hot.
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Stack>
      </SimpleGrid>
      <Image src="Download2.png" width={"100%"} />
    </Container>
  );
};

export default Banner;
