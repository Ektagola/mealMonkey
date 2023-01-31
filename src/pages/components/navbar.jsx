import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Links = [
  { link: "/", name: "Home" },
  { link: "#", name: "Menu" },
  { link: "#", name: "Offers" },
  { link: "#", name: "Foods" },
  { link: "#", name: "Services" },
  { link: "#", name: "Restauants" },
  { link: "/about", name: "About Us" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      color="white"
      maxW="7xl"
      bg={"blackAlpha.800"}
      px={8}
      borderRadius={"0 0 20px 20px"}
      py={2}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineCloseCircle /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Image src="logo.png" width="80px" alt="Meal Monkey logo"/>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((links) => (
              <Link
                px={2}
                py={2}
                fontWeight={"semi-bold"}
                fontFamily="DM Serif Display"
                _hover={{
                  textDecoration: "none",
                  position: "relative",
                  borderBottom: "3px",
                  borderColor: "#ED531A",
                  borderStyle: "solid",
                  transformOrigin: "bottom right",
                  transition: "transform 5s ease-out",
                }}
                key={links.name}
                href={links.link}
              >
                {links.name}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton cursor={"pointer"} px={5} rounded={"full"}>
              <FaShoppingCart size="25px" />
            </MenuButton>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((links) => (
              <Link
                px={2}
                py={2}
                fontWeight={"semi-bold"}
                fontFamily="DM Serif Display"
                _hover={{
                  textDecoration: "none",
                  position: "relative",
                  borderBottom: "3px",
                  borderColor: "#ED531A",
                  borderStyle: "solid",
                  transformOrigin: "bottom right",
                  transition: "transform 5s ease-out",
                }}
                key={links.name}
                href={links.link}
              >
                {links.name}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Container>
  );
};

export default Navbar;
