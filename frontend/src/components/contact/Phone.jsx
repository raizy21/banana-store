import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const Phone = ({ value, onChange }) => {
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
        value={value}
        onChange={(e) => onChange("phone", e.target.value)}
      />
    </FormControl>
  );
};

export default Phone;
