import {
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import {
  ExternalLinkIcon,
  PhoneIcon,
  UnlockIcon,
  EmailIcon,
  EditIcon,
} from "@chakra-ui/icons";
const ContactInfo = () => {
  const textColor = useColorModeValue("yellow.200", "yellow.500");
  const bgColor = useColorModeValue("#471cb4", "#39076b");

  return (
    <Container p={4} bgColor={bgColor}>
      <Stack spacing={1}>
        <Text
          fontSize="4xl"
          color={"yellow.400"}
          textAlign="center"
          textDecor={"underline"}
        >
          contact us:
          <UnlockIcon mx="2px" />
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          email: <EmailIcon mx="2px" />{" "}
          <a href="mailto:info@example.com">banana@info.com</a>
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          address: <EditIcon mx="2px" />
          123 banana str, fruit city, BC 12345
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          phone: <PhoneIcon mx="2px" />{" "}
          <a href="tel:+491234567890">+49 123 456 7890</a>
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          website:
          <Link href="https://banana-store.onrender.com/" isExternal>
            <ExternalLinkIcon mx="2px" />
            banana store
          </Link>
        </Text>
      </Stack>
    </Container>
  );
};

export default ContactInfo;
