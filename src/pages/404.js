import { Center, Text } from "@chakra-ui/react";

const Custom404 = () => {
  return (
    <Center h={550} flexDirection="column">
      <Text fontSize={24} fontWeight="medium" lineHeight={1.5}>
        We can't find the page you are looking for.
      </Text>
      <Text fontSize={24} fontWeight="medium" lineHeight={1.5}>
        Sorry for the inconvenience.
      </Text>
    </Center>
  );
};

export default Custom404;
