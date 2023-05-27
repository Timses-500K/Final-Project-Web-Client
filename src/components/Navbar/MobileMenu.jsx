import { Store } from "@/helper/store";
import { Box, Flex, Hide } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";

const mainMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Products", url: "/Products" },
  // { id: 3, name: "Categories", subMenuStatus: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const MobileMenu = ({ showSubMenu, setShowSubMenu, setMobileMenu }) => {
  const { dispatch, state } = useContext(Store);
  const { cart, nav } = state;
  return (
    <>
      <Hide breakpoint="(min-width: 768px)">
        <Flex
          flexDir="column"
          fontWeight="bold"
          color="black"
          position="absolute"
          top="50px"
          width="full"
          left={0}
          height="calc(100vh-50px)"
          bg="white"
          borderTop={1}
        >
          {mainMenu.map((menu) => {
            return (
              <React.Fragment key={menu.id}>
                {!!menu?.subMenuStatus ? (
                  <Flex
                    cursor="pointer"
                    fontSize="medium"
                    fontWeight="normal"
                    color="gray.800"
                    py={4}
                    px={5}
                    position="relative"
                    borderBottom={1}
                    flexDir="column"
                  >
                    <Flex
                      alignItems="center"
                      justify="space-between"
                      onClick={() => setShowSubMenu(!showSubMenu)}
                    >
                      {menu.name}
                      <BsChevronDown />
                    </Flex>
                    {/* {showSubMenu && (
                      <Box bg="blackAlpha.50" mx={-5} mt={4} mb={-4}>
                        {nav?.categories?.map((category) => {
                          return (
                            <Link
                              key={category.id}
                              href={`/category/${category.categoryName}`}
                            >
                              <Flex
                                justify="space-between"
                                px={8}
                                py={4}
                                borderTop={1}
                                onClick={() => {
                                  setShowSubMenu(false);
                                  setMobileMenu(false);
                                }}
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
                ) : (
                  <Box
                    fontSize="medium"
                    fontWeight="normal"
                    color="gray.800"
                    py={4}
                    px={5}
                    borderBottom={1}
                  >
                    <Link href={menu.url} onClick={() => setMobileMenu(false)}>
                      {menu.name}
                    </Link>
                  </Box>
                )}
              </React.Fragment>
            );
          })}
        </Flex>
      </Hide>
    </>
  );
};

export default MobileMenu;
