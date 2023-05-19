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
      >
        <CldImage
          width={800}
          height={800}
          src="nike/p2_hel1qp"
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
          <Heading as="h2" size="md">
            {product.name}
          </Heading>
          <Flex alignItems="center">
            <Text
              mr={2}
              fontSize="lg"
              fontWeight="semibold"
              color="blackAlpha.700"
            >
              Rp. {product.price - product.price * 0.2}
            </Text>
            <Text
              fontSize="md"
              fontWeight="medium"
              textDecoration="line-through"
              color="blackAlpha.500"
            >
              Rp. {product.price}
            </Text>
            <Text fontSize="md" fontWeight="medium" ml="auto" color="green.500">
              20% Off
            </Text>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
