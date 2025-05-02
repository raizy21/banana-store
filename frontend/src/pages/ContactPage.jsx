import ContactInfo from "../components/ContactInfo";
import LeftSideContact from "../components/LeftSideContact";
import RightSideContact from "../components/RightSideContact";

import { Container, Box, useColorModeValue } from "@chakra-ui/react";

const Contact = () => {
  const textColor = useColorModeValue("yellow.200", "yellow.500");
  const bgColor = useColorModeValue("#471cb4", "#39076b");

  return (
    <Container
      maxW="container.xl"
      bg={bgColor}
      color={textColor}
      p={12}
      borderRadius={10}
    >
      <ContactInfo
        textColor={textColor}
        bgColor={bgColor}
        textAlign={"center"}
      />

      <Box
        bgColor={bgColor}
        textColor={textColor}
        m={"10"}
        justifyContent={"space-between"}
        display={"flex"}
        flexDirection={{ base: "row" }}
      >
        <LeftSideContact />
        <RightSideContact />
      </Box>
    </Container>
  );
};

export default Contact;
