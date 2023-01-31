import React from "react";
import {
  Box,
  Text,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { GiDeliveryDrone, GiProcessor } from "react-icons/gi";

const Delivery = () => {
  return (
    <Box
      maxW="full"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(bg.png)`}
      height={"100vh"}
      my={10}
    >
      <Container maxW={"7xl"} pt={32} px={10}>
        <SimpleGrid columns={3} spacing={10} color={"white"}>
          <Stack>
            <chakra.h1
              fontWeight={"bold"}
              fontSize={"5xl"}
              fontFamily={"DM Serif Display"}
            >
              Fastest food <chakra.span color={"#ED531A"}>Delivery</chakra.span>{" "}
              in town
            </chakra.h1>
            <Text my={10}>
              Get your dream order fresh, steam hot at 20 min break time
            </Text>
          </Stack>
          <Stack>
            <Image src="logo.png" width={"400px"} />
            <Image src="center.png" width={"400px"} />
          </Stack>
          <Stack>
            <HStack pt={10}>
              <Box rounded={"full"} bgColor={"white"} color={"black"} p={4}>
                <GiDeliveryDrone size="35px" />
              </Box>
              <VStack align={"start"} px={10}>
                <chakra.h3 fontSize={"20px"} fontWeight={"bold"}>
                  Automated
                </chakra.h3>
                <Text color={"gray.500"}>
                  We Process food order based on AI management
                </Text>
              </VStack>
            </HStack>
            <HStack pt={10}>
              <Box rounded={"full"} bgColor={"white"} color={"black"} p={4}>
                <GiProcessor size="35px" />
              </Box>
              <VStack align={"start"} px={10}>
                <chakra.h3 fontSize={"20px"} fontWeight={"bold"}>
                  Air delivery
                </chakra.h3>
                <Text color={"gray.500"}>
                  Faster then ever at minimum low charge
                </Text>
              </VStack>
            </HStack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Delivery;
