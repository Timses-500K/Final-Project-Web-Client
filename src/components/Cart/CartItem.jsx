import { Box, Flex, Hide, Select, Text } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { useContext } from "react";
import { Store } from "@/helper/store";
import Link from "next/link";

const CartItem = ({ data: item }) => {
  const { dispatch } = useContext(Store);

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
          <Link href={`/products/${item.id}`}>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight="semibold"
              color="blackAlpha.800"
            >
              {item.itemName}
            </Text>
          </Link>
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
            Rp. {item.price - item.price * 0.2}
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
              <Select
                _hover={{ color: "black" }}
                cursor="pointer"
                onChange={(e) => {
                  let selectedSize = e.target.value;
                  dispatch({
                    type: "ADD_ITEM",
                    payload: { ...item, selectedSize },
                  });
                }}
              >
                {" "}
                {item.itemSize.map((size, i) => {
                  return (
                    <option
                      key={i}
                      value={size.size}
                      selected={item.selectedSize === size.size}
                    >
                      {size.size}
                    </option>
                  );
                })}
              </Select>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <Text fontWeight="semibold">Quantity:</Text>
              <Select
                _hover={{ color: "black" }}
                cursor="pointer"
                onChange={(e) => {
                  let q = parseInt(e.target.value);
                  dispatch({
                    type: "ADD_ITEM",
                    payload: { ...item, quantity: q },
                  });
                }}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((qty, i) => {
                  return (
                    <option
                      key={i}
                      value={qty}
                      selected={item.quantity === qty}
                    >
                      {qty}
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
            onClick={() => {
              dispatch({
                type: "DELETE_ITEM",
                payload: item,
              });
            }}
          >
            <RiDeleteBin6Line />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
