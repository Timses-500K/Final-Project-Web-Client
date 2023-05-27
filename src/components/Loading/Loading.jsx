import { Box, Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box h="100vh">
      <Center>
        <Spinner
          thickness="4px"
          speed="0.5s"
          emptyColor="gray.200"
          color="gray.700"
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default Loading;
