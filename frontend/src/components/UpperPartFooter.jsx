import bananaStore from "../../public/banana-store.png";

import { Link } from "react-router-dom";

import { Box, Image, Container, Flex, Button } from "@chakra-ui/react";

import { MdCall } from "react-icons/md";

const UpperPartFooter = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Box boxSize="sm">
          <Link to={"/"}>
            <Image src={bananaStore} alt="banana store" mt={40} h={28} w={28} />
          </Link>
        </Box>

        <Link to="/contact">
          <Button
            rightIcon={<MdCall />}
            variant="outline"
            bg={"#471cb4"}
            _hover={{ bg: "#39076b" }}
          >
            contact
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default UpperPartFooter;
