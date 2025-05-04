import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const Message = () => {
  return (
    <FormControl id="message" ml={["40%", null, null, 0]}>
      <FormLabel color="yellow.300">message:</FormLabel>
      <Textarea
        name="message"
        width="40%"
        bg="#39076b"
        color="yellow.300"
        placeholder="enter your message"
        resize="vertical"
        height="100px"
      />
    </FormControl>
  );
};

export default Message;
