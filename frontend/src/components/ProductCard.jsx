import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import ModalProduct from "./ModalProduct";
import SimpleParallax from "simple-parallax-js";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("yellow.200", "yellow.500");
  const bgColor = useColorModeValue("#471cb4", "#39076b");

  const { deleteProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
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
        description: "product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bgColor}
    >
      <SimpleParallax
        delay={0}
        orientation={"down"}
        scale={1.2}
        overflow
        maxTransition={60}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          objectFit="cover"
        />
      </SimpleParallax>

      <Box p={4} key={product._id}>
        <Heading as="h3" size="md" mb={2} color={textColor}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" mb={4} color={textColor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            colorScheme={"yellow"}
            onClick={onOpen}
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme={"red"}
          />
        </HStack>
      </Box>

      <ModalProduct isOpen={isOpen} onClose={onClose} product={product} />
    </Box>
  );
};

export default ProductCard;
