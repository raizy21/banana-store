import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("black", "yellow.400");
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bgColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" mb={4} coloor={textColor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} />
          <IconButton icon={<DeleteIcon />} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
