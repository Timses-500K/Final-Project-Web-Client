import Wrapper from "@/components/Footer/Wrapper";
import ProductDetailsGallery from "@/components/Slider/ProductDetailsGallery";
import {
  Box,
  Button,
  Flex,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";

const ProductDetails = () => {
  return (
    <Box w="full" py={{ md: 10 }}>
      <Wrapper>
        <Flex
          flexDirection={["column", "column", "row"]}
          px={{ md: 10 }}
          gap={[50, 50, 100]}
        >
          <Flex
            flex={1.5}
            w={{ base: "full", md: "auto" }}
            maxW={[500, 500, "full"]}
            mx={["auto", "auto", 0]}
          >
            <ProductDetailsGallery />
          </Flex>
          <Box flex={1}>
            <Text fontSize={34} fontWeight="semibold">
              Nike Jordan Aero G7
            </Text>
            <Text fontSize="lg" mb={5}>
              Men's Sneaker Shoes
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              Rp. 250,000
            </Text>
            <Text fontSize="sm" fontWeight="medium" color="blackAlpha.500">
              Include of taxes
            </Text>
            <Text
              fontSize="sm"
              fontWeight="medium"
              color="blackAlpha.500"
              mb={10}
            >
              (Also includes all applicable duties)
            </Text>
            <Box mb={2}>
              <Flex justify="space-between" mb={2}>
                <Text fontSize="md" fontWeight="semibold">
                  Select Size
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="semibold"
                  color="blackAlpha.500"
                  cursor="pointer"
                >
                  Select Guide
                </Text>
              </Flex>
              <SimpleGrid columns={3} spacing={5}>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.300"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  _hover={{ borderColor: "black" }}
                  cursor="pointer"
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.100"
                  bg="blackAlpha.100"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  cursor="not-allowed"
                  opacity={50}
                >
                  UK 6
                </Box>
                <Box
                  border="1px"
                  borderColor="blackAlpha.100"
                  bg="blackAlpha.100"
                  rounded="md"
                  textAlign="center"
                  py={3}
                  fontSize={"medium"}
                  cursor="not-allowed"
                  opacity={50}
                >
                  UK 6
                </Box>
              </SimpleGrid>
              <Text color="red.600" mt={1} mb={10}>
                Please select a size.
              </Text>
              <Button
                w="full"
                size="lg"
                rounded="full"
                bg="black"
                colorScheme="blackAlpha"
                fontSize="lg"
                transition="transform .3s ease-out"
                _active={{ transform: "scale(0.95)" }}
                mb={3}
              >
                Add to cart
              </Button>
              <Button
                w="full"
                size="lg"
                rounded="full"
                variant="outline"
                fontSize="lg"
                rightIcon={<BsHeart />}
                _active={{ transform: "scale(0.95)" }}
              >
                Favourite
              </Button>
              <Box mt={10}>
                <Text fontSize="lg" fontWeight="bold" mb={5}>
                  Product Description
                </Text>
                <Text fontSize="md" mb={5}>
                  A springy ride for every run, the Peg's familiar, just-for-you
                  feel returns to help you accomplish your goals. This version
                  has the same responsiveness and neutral support you love but
                  with improved comfort in those sensitive areas of your foot,
                  like the arch and toes. Whether you're logging long marathon
                  miles, squeezing in a speed session before the sun goes down
                  or hopping into a spontaneous group jaunt, it's still the
                  established road runner you can put your faith in, day after
                  day, run after run. This design celebrates the Pegasus'
                  history with Swoosh logos from the Peg 1, 24, 35 and 38.
                </Text>
                <UnorderedList fontSize="md" mb={5}>
                  <ListItem>Colour Shown: White/Football Grey/Bright</ListItem>
                  <ListItem>Mandarin/Multi-Colour Style: FB7179-100</ListItem>
                  <ListItem>Colour Shown: White/Football Grey/Bright</ListItem>
                  <ListItem>Mandarin/Multi-Colour Style: FB7179-100</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default ProductDetails;
