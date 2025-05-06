import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const Message = ({ value, onChange }) => {
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
        value={value}
        onChange={(e) => onChange("message", e.target.value)}
      />
    </FormControl>
  );
};

export default Message;
