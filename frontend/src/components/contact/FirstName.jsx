import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FirstName = () => {
  return (
    <FormControl id="firstName" ml={["40%", null, null, 0]}>
      <FormLabel color="yellow.300">first name:</FormLabel>
      <Input
        type="text"
        name="firstName"
        width="40%"
        bg="#39076b"
        color="yellow.300"
        placeholder="enter your first name"
      />
    </FormControl>
  );
};

export default FirstName;
