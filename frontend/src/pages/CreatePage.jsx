import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    // console.log(newProduct);
    const { success, message } = await createProduct(newProduct);
    // console.log("success", success);
    // console.log("message", message);

    if (!success) {
      toast({
        title: "error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW="container.sm">
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"2xl"}
          mt={10}
          textAlign={"center"}
          mb={8}
          color={"#471cb4"}
        >
          create new product
        </Heading>

        <Box w={"full"} bg={"#471cb4"} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder="product name"
              name="name"
              value={newProduct.name}
              color={"#f2e122"}
              bg={"#39076b"}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              _placeholder={{
                color: "#f1e98a",
                fontWeight: "bold",
              }}
            />

            <Input
              placeholder="product price"
              name="price"
              color={"#f2e122"}
              bg={"#39076b"}
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              _placeholder={{
                color: "#f1e98a",
                fontWeight: "bold",
              }}
            />

            <Input
              placeholder="product image URL"
              name="image"
              color={"#f2e122"}
              bg={"#39076b"}
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              _placeholder={{
                color: "#f1e98a",
                fontWeight: "bold",
              }}
            />

            <Button colorScheme="yellow" onClick={handleAddProduct} w="full">
              add product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
