import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";

import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <Box
      minH={"100vh"}
      bg={useColorModeValue("rgb(121, 111, 16)", "rgb(241, 233, 138)")}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
