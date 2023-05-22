import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data: product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Box
        as={motion.div}
        overflow="hidden"
        bg="white"
        transition="transform .3s ease-out"
        whileHover={{ scale: 1.05 }}
        cursor="pointer"
        boxShadow="lg"
        maxWidth={400}
      >
        <CldImage
          width={1200}
          height={1200}
          src={product.imageUrl}
          alt="Nike Product"
        />
        {/* <Image
          width={800}
          height={800}
          src={product.image_url}
          alt="image"
          style={{ objectFit: "cover" }}
        /> */}
        <Box p={4} color="blackAlpha.900">
          <Heading as="h2" size={{ base: "sm", md: "md" }} mb={2}>
            {product.itemName}
          </Heading>
          <Flex alignItems="center">
            <Text
              mr={2}
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
              color="blackAlpha.800"
            >
              Rp. {product.price - product.price * 0.2}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              fontWeight="semibold"
              textDecoration="line-through"
              color="blackAlpha.600"
            >
              Rp. {product.price}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
              ml="auto"
              color="green.500"
            >
              20% Off
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
