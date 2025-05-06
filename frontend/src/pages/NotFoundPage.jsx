import { useNavigate } from "react-router-dom";
import { Container, Flex, Box, VStack, Text, Button } from "@chakra-ui/react";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <Container
      bg={"#39076b"}
      w="100%"
      h="100vh"
      maxW="100%"
      p={0}
      centerContent
    >
      <VStack w={"100%"} h="100vh" justifyContent="center">
        <Text
          fontSize="4xl"
          color={"#f2e122"}
          w="100%"
          h="32px"
          wrap="wrap"
          textAlign="center"
          fontWeight="bold"
        >
          404
        </Text>
      </VStack>
      <Box
        w={"100%"}
        h="100%"
        p={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          color={"#f2e122"}
          fontSize="2xl"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
        >
          <Text>page not found</Text>
          <Box as="span" role="logo" ml={2} display="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="24px"
              height="24px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
              />
            </svg>
          </Box>
        </Flex>
      </Box>

      <Button
        color={"#f2e122"}
        colorScheme=""
        onClick={handleGoBack}
        border="2px solid #f2e122"
        borderRadius="8px"
        _hover={{ bg: "#f2e122", color: "#39076b" }}
        mb="24"
      >
        return to safety
      </Button>
    </Container>
  );
};

export default NotFoundPage;
