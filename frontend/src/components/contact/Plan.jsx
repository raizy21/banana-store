import { Box, FormLabel, Select, Text } from "@chakra-ui/react";

const Plan = ({ value, onChange }) => {
  return (
    <Box textAlign={"left"} ml={["40%", null, null, 0]}>
      <FormLabel htmlFor="banana-select" color="yellow.300">
        choose a banana plan:{" "}
      </FormLabel>
      <Select
        name="plan"
        id="banana-select"
        bg="#39076b"
        color="yellow.300"
        placeholder="--please choose an option--"
        value={value}
        onChange={(e) => onChange("plan", e.target.value)}
      >
        <option value="basic">BASIC BANANA</option>
        <option value="ripe">RIPE & READY</option>
        <option value="royale">BANANA ROYALE</option>
      </Select>
      <Text mt={4} color="yellow.300">
        see more details in intro page:
      </Text>
    </Box>
  );
};

export default Plan;
