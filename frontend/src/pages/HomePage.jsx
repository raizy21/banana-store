import { Container, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxW="container.xl" p={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, black,yellow.400)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          current products
        </Text>

        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"yellow.400"}
        >
          no products found
        </Text>
        <Link to={"/create"}>
          <Text
            as="span"
            color="black"
            fontSize="xl"
            _hover={{ textDecoration: "underline" }}
          >
            create a product
          </Text>
        </Link>
      </VStack>
    </Container>
  );
};

export default HomePage;
