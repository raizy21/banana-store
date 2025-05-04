import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const SecondName = () => {
  return (
    <FormControl id="secondName" ml={["40%", null, null, 0]}>
      <FormLabel color="yellow.300">second name:</FormLabel>
      <Input
        type="text"
        name="secondName"
        width="40%"
        bg="#39076b"
        color="yellow.300"
        placeholder="enter your second name"
      />
    </FormControl>
  );
};

export default SecondName;
