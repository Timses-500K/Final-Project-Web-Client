import { Box, Flex, Hide, Select, Show, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const CartItem = () => {
  return (
    <Flex
      py={5}
      gap={{ base: 3, md: 5 }}
      borderBottom="1px"
      borderColor="blackAlpha.500"
    >
      <Box w={{ base: "80px", md: "120px" }} flexShrink={0} aspectRatio="1/1">
        <Image src="/p2.png" alt="product image" width={120} height={120} />
      </Box>
      <Flex w="full" flexDirection="column">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            fontWeight="semibold"
            color="blackAlpha.800"
          >
            Jordan Aero Dynamic
          </Text>
          <Hide breakpoint="(min-width: 768px)">
            <Text
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="medium"
              color="blackAlpha.500"
              display={{ base: "block" }}
            >
              Mens Running Shoes
            </Text>
          </Hide>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="bold"
            color="blackAlpha.500"
            mt={2}
          >
            Rp. 250,000
          </Text>
        </Flex>
        <Hide breakpoint="(max-width: 768px)">
          <Text
            fontSize="md"
            fontWeight="medium"
            color="blackAlpha.500"
            display={{ md: "block" }}
          >
            Mens Running Shoes
          </Text>
        </Hide>
        <Flex alignItems="center" justify="space-between" mt={4}>
          <Flex
            alignItems="center"
            gap={{ base: 2, md: 10 }}
            color="blackAlpha.500"
            fontSize={{ base: "sm", md: "md" }}
          >
            <Flex alignItems="center" gap={1}>
              <Text fontWeight="semibold">Size:</Text>
              <Select _hover={{ color: "black" }} cursor="pointer">
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
              </Select>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <Text fontWeight="semibold">Quantity:</Text>
              <Select _hover={{ color: "black" }} cursor="pointer">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q}>
                      {q}
                    </option>
                  );
                })}
              </Select>
            </Flex>
          </Flex>
          <Box
            cursor="pointer"
            color="blackAlpha.500"
            _hover={{ color: "black" }}
            fontSize={20}
          >
            <RiDeleteBin6Line />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
