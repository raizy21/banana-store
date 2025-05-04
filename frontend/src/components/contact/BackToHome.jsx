import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const BackToHome = () => {
  return (
    <Box>
      <Link to="/">
        <Button
          type="submit"
          variant="outline"
          colorScheme="yellow.300"
          color="yellow.300"
          fontSize={["lg", null, "2xl"]}
          px={12}
          borderRadius="xl"
          ml={["42%", null, "0"]}
          _hover={{
            fontSize: ["xl", null, "3xl"],
          }}
          mt="1rem"
        >
          back to home
        </Button>
      </Link>
    </Box>
  );
};

export default BackToHome;
