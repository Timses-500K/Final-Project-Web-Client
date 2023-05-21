import Wrapper from "@/components/Navbar/Wrapper";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { fetchDataFromAPI } from "../../modules/fetch";

const Category = ({ products }) => {
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
            {products.categoryName}
          </Text>
        </Center>
        <SimpleGrid minChildWidth={400} gap={5} my={14}>
          {products?.CategoryItems?.Item?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </SimpleGrid>
      </Wrapper>
    </Box>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = await fetchDataFromAPI("/dashboard/category");
  const paths = categories.map((c) => ({
    params: {
      id: `${c.categoryName}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await fetchDataFromAPI(`/product/${params.id}`);
  return {
    props: {
      products,
    },
  };
}
