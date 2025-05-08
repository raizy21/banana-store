import FirstName from "./contact/FirstName.jsx";
import SecondName from "./contact/SecondName.jsx";
import Email from "./contact/Email.jsx";
import Phone from "./contact/Phone.jsx";
import Message from "./contact/Message.jsx";
import Plan from "./contact/Plan.jsx";
import IntroPage from "./contact/InfoPage.jsx";
import ContactSend from "./contact/ContactSend.jsx";
import BackToHome from "./contact/BackToHome.jsx";
import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";

const LeftSideContact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    message: "",
    plan: "",
  });

  const toast = useToast();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    console.log("sending form data:", formData);

    try {
      const res = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({ title: "email sent successfully", status: "success" });
      } else {
        toast({
          title: "failed to send email",
          description: data.message,
          status: "error",
        });
      }
    } catch (err) {
      toast({
        title: "network error",
        description: err.message,
        status: "error",
      });
    }
  };

  return (
    <Box
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      lg={{ w: "50%" }}
      flexDir="column"
    >
      <FirstName value={formData.firstName} onChange={handleChange} />
      <SecondName value={formData.secondName} onChange={handleChange} />
      <Email value={formData.email} onChange={handleChange} />
      <Phone value={formData.phone} onChange={handleChange} />
      <Message value={formData.message} onChange={handleChange} />
      <Plan value={formData.plan} onChange={handleChange} />
      <IntroPage />
      <ContactSend onClick={handleSubmit} />
      <BackToHome />
    </Box>
  );
};

export default LeftSideContact;
