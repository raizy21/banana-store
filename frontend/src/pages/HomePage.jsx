import { Container, VStack, Text, SimpleGrid, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW="container.xl" p={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, #471cb4,#39076b)"}
          bgClip={"text"}
          textAlign={"center"}
          mt={10}
        >
          current products
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight={"bold"}
            color={"#471cb4"}
          >
            no products found
            <Divider my={4} bg={"#471cb4"} />
            <Link to={"/create"}>
              <Text
                as="span"
                color={"#39076b"}
                fontSize="xl"
                _hover={{ textDecoration: "underline" }}
              >
                create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
