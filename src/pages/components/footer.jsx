import { Flex, chakra } from "@chakra-ui/react";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai"
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <Flex
      w="full"
      as="footer"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      align="center"
      justify="space-between"
      px="6"
      py="4"
      bg="blackAlpha.800"
    >
      <chakra.a
        href="#"
        fontSize="xl"
        fontWeight="bold"
        color="white"
      >
        Brand
      </chakra.a>

      <chakra.p
        py={{
          base: "2",
          sm: "0",
        }}
        color="white"
      >
        @2023{" "}
        <chakra.span fontWeight={"bold"} color="#ED531A">
          Ekta Gola{" "}
        </chakra.span>
        || All rights reserved
      </chakra.p>

      <Flex mx="5">
        <AiFillInstagram size="22px" color="white"/>
        <AiOutlineTwitter size="22px" color="white"/>
        <FaFacebookF size="22px" color="white"/>
        <AiFillYoutube size="22px" color="white"/>
      </Flex>
    </Flex>
  );
};

export default Footer;
