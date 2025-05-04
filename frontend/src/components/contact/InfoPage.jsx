import { Box, Text, Link } from "@chakra-ui/react";

const InfoPage = () => {
  return (
    <Box color="yellow.300" ml={["42%", null, null, "0"]}>
      <Text color="yellow.300" fontSize="sm">
        see more detail about option in intro page:&nbsp;
        <Link
          isExternal
          color="yellow.300"
          fontSize="xl"
          _hover={{ fontSize: "2xl" }}
          textDecoration="underline"
          href="https://raizy21.github.io/berlin-bananas/"
        >
          berlin banana
        </Link>
      </Text>
      <Box my={4} />
    </Box>
  );
};

export default InfoPage;
