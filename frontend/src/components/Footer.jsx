import UpperPartFooter from "./UpperPartFooter";
import DownPartFooter from "./DownPartFooter";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="yellow.400" width="100%" py={4}>
      {/* the upper part */}
      <UpperPartFooter />

      {/* the down part */}
      <DownPartFooter />
    </Box>
  );
};

export default Footer;
