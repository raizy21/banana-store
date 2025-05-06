import { Box, Button } from "@chakra-ui/react";

const ContactSend = ({ onSubmit }) => {
  return (
    <Box>
      <Button
        onClick={onSubmit}
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
      >
        send
      </Button>
    </Box>
  );
};

export default ContactSend;
