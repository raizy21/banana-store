import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Input,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const ModalProducts = ({ isOpen, onClose, product }) => {
  const textColor = useColorModeValue("yellow.200", "yellow.500");
  const bgColor = useColorModeValue("#471cb4", "#39076b");

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { updateProduct } = useProductStore();
  const toast = useToast();

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    if (!success) {
      toast({
        title: "error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } else {
      toast({
        title: "success",
        description: "product updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    return {
      success: true,
      message: "product updated successfully",
    };
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={bgColor} color={textColor}>
        <ModalHeader>update product</ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4}>
            <Input
              placeholder="product name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />

            <Input
              placeholder="product price"
              name="price"
              type="number"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  price: e.target.value,
                })
              }
            />
            <Input
              placeholder="product image"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  image: e.target.value,
                })
              }
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorSchema="yellow"
            mr={3}
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            update
          </Button>
          <Button variant="ghost" onClick={onClose}>
            cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalProducts;
