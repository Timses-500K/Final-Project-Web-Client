import Wrapper from "@/components/Footer/Wrapper";
import ProductDetailsGallery from "@/components/Slider/ProductDetailsGallery";
import RelatedProducts from "@/components/Slider/RelatedProducts";
import {
  Box,
  Button,
  Flex,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { checkStock, fetchDataFromAPI } from "../../modules/fetch";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/store/cartSlice";
import { Store } from "@/helper/store";
import { convertToRupiah } from "@/helper/custom";
import { useAuth } from "@/modules/context/authCotext";
import { useRouter } from "next/router";
import cart from "../cart";

const ProductDetails = ({ product, products }) => {
  // const dispatch = useDispatch();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState();
  const [stock, setStock] = useState(0);
  const [showErrorSize, setShowErrorSize] = useState(false);
  const toast = useToast();
  const { state, dispatch } = useContext(Store);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
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
              {product.itemName}
            </Text>
            <Text fontSize="lg">{product.itemCategory?.[0].categoryName}</Text>
            <Text fontSize="sm" mb={5}>
              Color: {product.color}
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {convertToRupiah(product.price)}
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
                  Stock: {stock}
                </Text>
              </Flex>
              <SimpleGrid columns={3} spacing={5} id="simpleSizeGrid" pb={5}>
                {product?.itemSize?.map((size, i) => (
                  <Box
                    key={i}
                    border="1px"
                    borderColor={
                      selectedSize === size.size ? "black" : "blackAlpha.300"
                    }
                    rounded="md"
                    textAlign="center"
                    py={3}
                    fontSize={"medium"}
                    _hover={{ borderColor: "black" }}
                    cursor="pointer"
                    onClick={async () => {
                      setSelectedSize(size.size);
                      setStock(await checkStock(product.id, size.size));
                      setShowErrorSize(false);
                    }}
                  >
                    {size.size}
                  </Box>
                ))}
              </SimpleGrid>
              {showErrorSize && (
                <Text color="red.600" mt={1} mb={10}>
                  Please select a size.
                </Text>
              )}
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
                onClick={() => {
                  if (!isLoggedIn) {
                    toast({
                      title: "Alert!",
                      description:
                        "Sorry, please login to add an item to cart!.",
                      status: "warning",
                      position: "top",
                      isClosable: true,
                    });
                    router.push("/login");
                    return;
                  }
                  if (!selectedSize) {
                    setShowErrorSize(true);
                    document.getElementById("simpleSizeGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    const existItem = state.cart.cartItems.find(
                      (item) =>
                        item.id === product.id &&
                        item.selectedSize === selectedSize
                    );

                    const quantity = existItem ? existItem.quantity + 1 : 1;
                    if (stock < quantity) {
                      toast({
                        title: "Attention!",
                        description:
                          "Sorry, you have reached the stock available. Please check your items in cart and try again.",
                        status: "warning",
                        position: "top",
                        isClosable: true,
                      });
                      return;
                    }
                    if (quantity > 10) {
                      toast({
                        title: "Attention!",
                        description:
                          "Sorry, you have reached the quantity limit. Please remove an item and try again.",
                        status: "warning",
                        position: "top",
                        isClosable: true,
                      });
                      return;
                    }
                    console.log(state.cart.cartItems, "<<<<<cart");
                    dispatch({
                      type: "ADD_ITEM",
                      payload: { ...product, selectedSize, quantity },
                    });
                    toast({
                      title: "Success.",
                      description:
                        "Yeay, your dream shoes has been successfully added to the cart.",
                      status: "success",
                      position: "top",
                      isClosable: true,
                    });
                  }
                  // dispatch(
                  //   addToCart({
                  //     ...product,
                  //     oneQuantityPrice: product.price,
                  //   })
                  // );
                }}
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
        <RelatedProducts products={products} />
      </Wrapper>
    </Box>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromAPI("/product");
  const paths = products.map((p) => ({
    params: {
      id: `${p.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await fetchDataFromAPI(`/productDetail/${params.id}`);
  const products = await fetchDataFromAPI("/product");
  // const sizes = await fetchDataFromAPI(`/product/${params.id}/sizes`);
  return {
    props: {
      product: product.productDetails,
      products,
      // sizes,
    },
  };
}
