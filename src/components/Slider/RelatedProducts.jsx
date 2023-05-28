import { Box, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../ProductCard/ProductCard";

const RelatedProducts = ({ related }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box mt={{ base: 50, md: 100 }} mb={{ base: 100, md: 5 }}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        You Might Also Like
      </Text>
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
        swipeable
      >
        {related?.CategoryItems?.map((product, index) => (
          <ProductCard
            key={index}
            data={product.Item}
            productId={product.itemId}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default RelatedProducts;
