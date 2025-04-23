import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import { PlusSquareIcon } from "@chakra-ui/icons";
import { CiSquarePlus } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

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
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, orange.900, orange.100)"}
          bgClip={"text"}
        >
          <Link to={"/"}>banana store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus size={40} />
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon size={40} /> : <CiSun size={40} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
