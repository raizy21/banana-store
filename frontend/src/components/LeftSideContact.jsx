import FirstName from "./contact/FirstName.jsx";
import SecondName from "./contact/SecondName.jsx";
import Email from "./contact/Email.jsx";
import Phone from "./contact/Phone.jsx";
import Message from "./contact/Message.jsx";
import Plan from "./contact/Plan.jsx";
import IntroPage from "./contact/InfoPage.jsx";
import ContactSend from "./contact/ContactSend.jsx";
import BackToHome from "./contact/BackToHome.jsx";
import { Box } from "@chakra-ui/react";

const LeftSideContact = () => {
  return (
    <Box
      as="form"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      lg={{ w: "50%" }}
      flexDir="column"
    >
      <FirstName />
      <SecondName />
      <Email />
      <Phone />
      <Message />
      <Plan />
      <IntroPage />
      <ContactSend />
      <BackToHome />
    </Box>
  );
};

export default LeftSideContact;
