import { Box, Flex, Hide } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const mainMenu = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenuStatus: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenu = [
  { id: 1, name: "Jordan", doc_count: 11, url: "/products/jordan" },
  { id: 2, name: "Sneakers", doc_count: 8, url: "/products/sneakers" },
  { id: 3, name: "Running", doc_count: 40, url: "/products/running" },
  { id: 4, name: "Football", doc_count: 90, url: "/products/football" },
];

const MobileMenu = ({ showSubMenu, setShowSubMenu, setMobileMenu }) => {
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
                    {showSubMenu && (
                      <Box bg="blackAlpha.50" mx={-5} mt={4} mb={-4}>
                        {subMenu.map((submenu) => {
                          return (
                            <Link key={submenu.id} href={submenu.url}>
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
                                {submenu.name}
                                <Box fontSize="sm" color="gray.400">
                                  {submenu.doc_count}
                                </Box>
                              </Flex>
                            </Link>
                          );
                        })}
                      </Box>
                    )}
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
