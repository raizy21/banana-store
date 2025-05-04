import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const Phone = () => {
  return (
    <FormControl id="phone" ml={["40%", null, null, 0]}>
      <FormLabel color="yellow.300">phone:</FormLabel>
      <Input
        type="tel"
        name="phone"
        width="40%"
        bg="#39076b"
        color="yellow.300"
        placeholder="enter your phone number"
      />
    </FormControl>
  );
};

export default Phone;
