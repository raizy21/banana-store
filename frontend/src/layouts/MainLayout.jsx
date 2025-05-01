import { Box, useColorModeValue } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("rgb(121, 111, 16)", "rgb(241, 233, 138)")}
    >
      <Navbar />
      <main className=" py-4">
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default MainLayout;
