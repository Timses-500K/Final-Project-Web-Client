import Wrapper from "@/components/Navbar/Wrapper";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";

const Category = () => {
  return (
    <Box w="full" py={{ md: 10 }}>
      <Wrapper>
        <Center maxW={800} mx="auto" mt={{ base: 8, md: 0 }}>
          <Text
            fontSize={{ base: 28, md: 34 }}
            mb={5}
            fontWeight="semibold"
            lineHeight={1.25}
          >
            Running Shoes
          </Text>
        </Center>
        <SimpleGrid minChildWidth={400} gap={5} my={14}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      </Wrapper>
    </Box>
  );
};

export default Category;
