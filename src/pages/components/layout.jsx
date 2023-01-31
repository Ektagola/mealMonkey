import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import BoxSide from "./boxSide"
import Order from "../sections/order";

const Layout = ({ children }) => {
  return (
    <Box bgColor={'white'}>
      <BoxSide/>
      <Navbar />
      {children}
      <Order/>
      <Footer />
    </Box>
  );
};

export default Layout;
