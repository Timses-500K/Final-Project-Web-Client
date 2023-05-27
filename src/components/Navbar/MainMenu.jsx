import {
  Box,
  Center,
  Flex,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsCart, BsChevronDown, BsHeart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
// import { useSelector } from "react-redux";
import { Store } from "@/helper/store";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";

const mainMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/products" },
  // { id: 3, name: "Categories", subMenuStatus: true },
  { id: 4, name: "Contact Us", url: "/contact" },
];

const MainMenu = ({
  showSubMenu,
  setShowSubMenu,
  mobileMenu,
  setMobileMenu,
}) => {
  // const { cartItems } = useSelector((state) => state.cart);
  const { dispatch, state } = useContext(Store);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const { cart } = state;

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce(
        (accumulator, current) => accumulator + current.quantity,
        0
      )
    );
  }, [cart.cartItems]);

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        width="auto"
        gap={20}
      >
        {mainMenu.map((menu) => {
          return (
            <React.Fragment key={menu.id}>
              {!!menu?.subMenuStatus ? (
                <Box
                  position="relative"
                  cursor="pointer"
                  fontSize="medium"
                  fontWeight="normal"
                  color="gray.800"
                  _hover={{ color: "gray.500" }}
                  p={4}
                  transition="all"
                  transitionDuration={100}
                >
                  <Flex
                    alignItems="center"
                    gap={2}
                    position="relative"
                    onMouseEnter={() => setShowSubMenu(true)}
                    onMouseLeave={() => setShowSubMenu(false)}
                  >
                    {menu.name}
                    <BsChevronDown />
                    {/* {showSubMenu && (
                      <Box
                        bg="white"
                        position="absolute"
                        left={0}
                        top={6}
                        minW="250px"
                        color="black"
                        shadow="lg"
                      >
                        {nav?.categories?.map((category) => {
                          return (
                            <Link
                              key={category.id}
                              href={`/category/${category.id}`}
                            >
                              <Flex
                                h={12}
                                alignItems="center"
                                justify="space-between"
                                px={3}
                                _hover={{ bg: "blackAlpha.50" }}
                                cursor="pointer"
                              >
                                {category.categoryName}
                                <Box fontSize="sm" color="gray.400">
                                  {category.categoryItem.length}
                                </Box>
                              </Flex>
                            </Link>
                          );
                        })}
                      </Box>
                    )} */}
                  </Flex>
                </Box>
              ) : (
                <Box
                  position="relative"
                  cursor="pointer"
                  fontSize="medium"
                  fontWeight="normal"
                  color="gray.800"
                  _hover={{ color: "gray.500" }}
                  p={4}
                  transition="all"
                  transitionDuration={100}
                >
                  <Link href={menu.url}>{menu.name}</Link>
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </Box>
      <Flex alignItems="center" justify="center" gap={2}>
        <InputGroup width={200}>
          <InputLeftElement pointerEvents="none">
            <Search2Icon />
          </InputLeftElement>
          <Input type="text" placeholder="Search" rounded="full" />
        </InputGroup>
        <Center
          w={{ base: 8, md: 12 }}
          h={{ base: 8, md: 12 }}
          rounded="full"
          cursor="pointer"
          position="relative"
          fontSize={{ base: "18px", md: "22px" }}
          _hover={{ bg: "gray.100" }}
        >
          <BsHeart />
          <Box
            h={{ base: "14px", md: "18px" }}
            w={{ base: "14px", md: "18px" }}
            rounded="full"
            bg="red.600"
            position="absolute"
            top={1}
            left={{ base: 5, md: 7 }}
            color="white"
            fontSize={{ base: "10px", md: "12px" }}
            px={{ base: "2px", md: "5px" }}
          >
            <Center>19</Center>
          </Box>
        </Center>
        <Link href="/cart">
          <Center
            w={{ base: 8, md: 12 }}
            h={{ base: 8, md: 12 }}
            rounded="full"
            cursor="pointer"
            position="relative"
            fontSize={{ base: "18px", md: "22px" }}
            _hover={{ bg: "gray.100" }}
          >
            <BsCart />
            {cartItemsCount > 0 && (
              <Box
                h={{ base: "14px", md: "18px" }}
                w={{ base: "14px", md: "18px" }}
                rounded="full"
                bg="red.600"
                position="absolute"
                top={1}
                left={{ base: 5, md: 7 }}
                color="white"
                fontSize={{ base: "10px", md: "12px" }}
                px={{ base: "2px", md: "5px" }}
              >
                <Center>
                  {cartItemsCount}
                  {/* {cart.cartItems.reduce(
                    (accumulator, current) => accumulator + current.quantity,
                    0
                  )} */}
                </Center>
              </Box>
            )}
          </Center>
        </Link>
        <Hide breakpoint="(min-width: 768px)">
          <Center
            w={{ base: 8, md: 12 }}
            h={{ base: 8, md: 12 }}
            rounded="full"
            cursor="pointer"
            position="relative"
            fontSize={{ base: "20px", md: "24px" }}
            _hover={{ bg: "gray.100" }}
          >
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight onClick={() => setMobileMenu(true)} />
            )}
          </Center>
        </Hide>
      </Flex>
    </>
  );
};

export default MainMenu;
