import { Box, Button } from "@chakra-ui/react";

const ContactSend = () => {
  const handleClick = () => {
    alert("message and info send!");
  };
  return (
    <Box>
      <Button
        onClick={handleClick}
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
