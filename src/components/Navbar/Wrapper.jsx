import { Box } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return (
    <Box w="full" maxW="1800px" px={{ base: "10px", md: "15px" }} mx="auto">
      {children}
    </Box>
  );
};

export default Wrapper;
