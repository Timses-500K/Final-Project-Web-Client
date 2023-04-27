import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box w="full" maxW="1300px" px={{ base: "5px", md: "10px" }} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
