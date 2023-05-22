import { Box, Center, Flex, Hide, Show } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsCart, BsChevronDown, BsHeart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
// import { useSelector } from "react-redux";
import { Store } from "@/helper/store";

const mainMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenuStatus: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenu = [
  { id: 1, name: "Jordan", doc_count: 11, url: "/category/4" },
  { id: 2, name: "Sneakers", doc_count: 8, url: "/category/1" },
  { id: 3, name: "Running", doc_count: 40, url: "/category/2" },
  { id: 4, name: "Football", doc_count: 90, url: "/category/3" },
];

const MainMenu = ({
  showSubMenu,
  setShowSubMenu,
  mobileMenu,
  setMobileMenu,
}) => {
  // const { cartItems } = useSelector((state) => state.cart);
  const { dispatch, state } = useContext(Store);
  const { cart, nav } = state;

  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        width="auto"
        gap={8}
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
                    {showSubMenu && (
                      <Box
                        bg="white"
                        position="absolute"
                        left={0}
                        top={6}
                        minW="250px"
                        color="black"
                        shadow="lg"
                      >
                        {nav.categories.map((category) => {
                          return (
                            <Link
                              key={category.id}
                              href={`/category/${category.categoryName}`}
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
                    )}
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
            {cart.cartItems.length > 0 && (
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
                  {cart.cartItems.reduce(
                    (accumulator, current) => accumulator + current.quantity,
                    0
                  )}
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
