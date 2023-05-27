import CartItem from "@/components/Cart/CartItem";
import Wrapper from "@/components/Footer/Wrapper";
import { Store } from "@/helper/store";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spacer,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
// import { getSession, useSession } from "next-auth/react";
import OrderItem from "@/components/Order/OrderItem";
import { getUser } from "@/modules/fetch";
import { instance } from "@/modules/axios";
// import { instance } from "@/modules/axios";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { getUser } from "@/modules/fetch";
// import { get } from "react-hook-form";
// import { useSelector } from "react-redux";

const Confirmation = () => {
  // const { cartItems } = useSelector((state) => state.cart);
  // const { data: session, status } = useSession();
  // console.log(user, "<<<<< user");
  // console.log(session, "<<<< session");
  const router = useRouter();
  const toast = useToast();
  const { state, dispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;
  // const [loggedUser, setLoogedUser] = useState({});
  // useEffect(() => {
  //   const token = Cookies.get("accesstoken");
  //   console.log(token, "<<<<token");
  //   const user = async () => {
  //     const get_user = await instance.get("/user", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return get_user;
  //   };
  //   setLoogedUser(user);
  // });

  // console.log(loggedUser, "<<<<<Logged");

  return (
    <>
      <Head>
        <title>Order Confirmation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box w="full" py={{ md: 20 }}>
        <Wrapper>
          <Box textAlign="center" maxW={800} mx="auto" mt={{ base: 8, md: 0 }}>
            <Text
              fontSize={{ base: 28, md: 34 }}
              mb={5}
              fontWeight="semibold"
              lineHeight={1.25}
            >
              Order Confirmation
            </Text>
          </Box>
          <Flex flexDirection={{ base: "column", lg: "row" }} gap={12} py={10}>
            <Box flex={2}>
              <Text fontSize="2xl" fontWeight="bold" pb={10}>
                Contact Information
              </Text>
              <Box>
                <FormControl>
                  <FormLabel fontWeight="semibold">First Name</FormLabel>
                  <Input type="text" isReadOnly value="" />
                  <FormLabel fontWeight="semibold">Last Name</FormLabel>
                  <Input type="text" isReadOnly value="" />
                  <FormLabel fontWeight="semibold">Email address</FormLabel>
                  <Input type="email" isReadOnly value="" />
                  <FormLabel fontWeight="semibold">Phone</FormLabel>
                  <Input type="number" />
                  <FormLabel fontWeight="semibold">Address</FormLabel>
                  <Select placeholder="Select address">
                    {/* {user.addresses?.map((addr) => (
                      <option>{addr.address}</option>
                    ))} */}
                  </Select>
                </FormControl>
                {/* <TableContainer>
                  <Table variant="simple">
                    <Tbody>
                      <Tr>
                        <Td fontWeight="bold">First Name</Td>
                        <Td>Dedit</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight="bold">Last Name</Td>
                        <Td>Suprastyo</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight="bold">Email</Td>
                        <Td>arek.nggantenk@gmail.com</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight="bold">Phone Number</Td>
                        <Td>085264865959</Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight="bold">Address</Td>
                        <Td>
                          Perumahan Bandar Srimas Blok I No. 5 Sungai Panas
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer> */}
                {/* <Flex justify="start">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="black"
                  >
                    First Name
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="medium"
                    color="black"
                  >
                    : Dedit
                  </Text>
                </Flex>
                <Flex justify="start">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="black"
                  >
                    Last Name
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="medium"
                    color="black"
                  >
                    : Suprastyo
                  </Text>
                </Flex>
                <Flex justify="start">
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="bold"
                    color="black"
                  >
                    Email
                  </Text>
                  <Text
                    fontSize={{ base: "md", lg: "lg" }}
                    fontWeight="medium"
                    color="black"
                  >
                    : arek.nggantenk@gmail.com
                  </Text>
                </Flex> */}
              </Box>
            </Box>
            <Box flex={1}>
              <Text fontSize="2xl" fontWeight="bold">
                Summary
              </Text>
              <Box my={5}>
                <Flex justify="space-between">
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="medium"
                    color="black"
                    textTransform="uppercase"
                  >
                    Subtotal
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="medium"
                    color="black"
                  >
                    Rp.{" "}
                    {state.cart.cartItems.reduce(
                      (a, c) => a + c.quantity * (c.price - c.price * 0.2),
                      0
                    )}
                  </Text>
                </Flex>
                <Flex justify="space-between" py={2}>
                  <Text fontSize={{ base: "sm", lg: "md" }} color="black">
                    Estimated Delivery & Handling
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="medium"
                    color="black"
                  >
                    Rp.{" "}
                    {state.cart.cartItems.reduce(
                      (a, c) => a + c.quantity * (c.price - c.price * 0.2),
                      0
                    ) * 0.01}
                  </Text>
                </Flex>
                <Flex
                  justify="space-between"
                  py={2}
                  pb={5}
                  borderBottom="1px"
                  borderColor="blackAlpha.500"
                >
                  <Text fontSize={{ base: "sm", lg: "md" }} color="black">
                    Estimated Duties and Taxes
                  </Text>
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    fontWeight="medium"
                    color="black"
                  >
                    Free
                  </Text>
                </Flex>
                <Box>
                  {state.cart.cartItems.map((item, i) => (
                    <OrderItem key={i} data={item} />
                  ))}
                </Box>
                <Box fontSize={{ base: "sm", md: "md" }} py={5} borderTop={1}>
                  <Flex
                    justify="space-between"
                    py={2}
                    pb={5}
                    borderBottom="1px"
                    borderColor="blackAlpha.500"
                  >
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      color="black"
                      fontWeight="bold"
                      textTransform="uppercase"
                    >
                      Total
                    </Text>
                    <Text
                      fontSize={{ base: "sm", lg: "md" }}
                      fontWeight="medium"
                      color="black"
                    >
                      Rp.{" "}
                      {state.cart.cartItems.reduce(
                        (a, c) => a + c.quantity * (c.price - c.price * 0.2),
                        0
                      ) +
                        state.cart.cartItems.reduce(
                          (a, c) => a + c.quantity * (c.price - c.price * 0.2),
                          0
                        ) *
                          0.01}
                    </Text>
                  </Flex>
                </Box>
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
                  // onClick={() => {
                  //   if (status === "authenticated") {
                  //     router.push("/shipping");
                  //   } else {
                  //     toast({
                  //       title: "Alert!",
                  //       description: "Sorry, please login to checkout!.",
                  //       status: "warning",
                  //       position: "top",
                  //       isClosable: true,
                  //     });
                  //     router.push("/login");
                  //   }
                  // }}
                >
                  Checkout
                </Button>
              </Box>
            </Box>
          </Flex>
        </Wrapper>
      </Box>
    </>
  );
};

export default Confirmation;

// export async function getStaticProps() {
//   const user = await instance.get("/user");
//   return {
//     props: {
//       user,
//     },
//   };
// }

// Confirmation.auth = true;
