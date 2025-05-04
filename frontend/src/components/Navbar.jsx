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
    <Box as="header" bg="yellow.400" width="100%" p={4} maxWidth="100%">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box boxSize="sm">
          <Link to={"/"}>
            <Image
              src={bananaStore}
              alt="banana store"
              mt={40}
              h={20}
              w={36}
              ml={20}
            />
          </Link>
        </Box>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button bg={"#471cb4"} _hover={{ bg: "#39076b" }}>
              <CiSquarePlus size={40} />
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            bg={"#471cb4"}
            _hover={{ bg: "#39076b" }}
            mr={20}
          >
            {colorMode === "light" ? (
              <FaMoon size={40} />
            ) : (
              <IoSunnyOutline size={40} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
