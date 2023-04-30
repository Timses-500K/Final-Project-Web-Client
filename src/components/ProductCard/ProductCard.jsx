import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/">
      <Box
        as={motion.div}
        overflow="hidden"
        bg="white"
        transition="transform .3s ease-out"
        whileHover={{ scale: 1.05 }}
        cursor="pointer"
        boxShadow="lg"
      >
        <Image
          width={800}
          height={800}
          src="/p4.png"
          alt="image"
          style={{ objectFit: "cover" }}
        />
        <Box p={4} color="blackAlpha.900">
          <Heading as="h2" size="lg">
            Nike Runner
          </Heading>
          <Flex alignItems="center" color="blackAlpha.500">
            <Text mr={2} fontSize="lg" fontWeight="semibold">
              Rp. 250000
            </Text>
            <Text
              fontSize="md"
              fontWeight="medium"
              textDecoration="line-through"
            >
              Rp. 350000
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
