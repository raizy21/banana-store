import {
  Button,
  Container,
  Flex,
  HStack,
  Box,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import bananaStore from "../../public/banana-store.png";

// import { PlusSquareIcon } from "@chakra-ui/icons";
import { CiSquarePlus } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box boxSize="sm">
          <Image src={bananaStore} alt="banana store" mt={40} h={28} w={28} />
          <Link to={"/"}></Link>
        </Box>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus size={40} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <FaMoon size={40} />
            ) : (
              <IoSunnyOutline size={40} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
