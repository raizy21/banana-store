import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const bgColor = useColorModeValue("rgb(121, 111, 16)", "rgb(241, 233, 138)");
  return (
    <Flex direction="column" minH="100vh" bg={bgColor} overflow="hidden">
      <Navbar />
      {/* main content should expand to push footer down */}
      <Box as="main" flex="1" py={4} bg={bgColor} overflow="auto">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
