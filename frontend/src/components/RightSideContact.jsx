import { useState, useEffect } from "react";
import { imgBanannaArray } from "../data/imageEventsBanana.js";
import { Box, Image } from "@chakra-ui/react";

const RightSideContact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imgBanannaArray.length
      );
    }, 4000); // change image every 4 seconds

    return () => clearInterval(interval); // clean up the interval when component unmounts
  }, []);
  return (
    <Box display={{ base: "none", lg: "flex" }} borderColor="accent">
      <Image
        id="imageContact"
        src={imgBanannaArray[currentImageIndex].images}
        alt="event"
        borderRadius="full"
        h="35rem"
        w="35rem"
      />
    </Box>
  );
};

export default RightSideContact;
