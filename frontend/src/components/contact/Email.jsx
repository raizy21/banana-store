import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const Email = () => {
  return (
    <FormControl id="email" ml={["40%", null, null, 0]}>
      <FormLabel color="yellow.300">email:</FormLabel>
      <Input
        type="text"
        name="email"
        width="40%"
        bg="#39076b"
        color="yellow.300"
        placeholder="enter your email"
        required
      />
    </FormControl>
  );
};

export default Email;
