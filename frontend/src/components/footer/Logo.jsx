import bananaStore from "../../../public/banana-store.png";

import { Link } from "react-router-dom";

import { Box, Image, Container, Flex } from "@chakra-ui/react";

const Logo = () => {
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
      </Flex>
    </Container>
  );
};

export default Logo;
