import { Box, Flex } from "@chakra-ui/react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNav, setShowNav] = useState(0);
  const [navShadow, setNavShadow] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShowNav("-80px");
        setNavShadow("none");
      } else {
        setShowNav(0);
        setNavShadow("md");
      }
    } else {
      setShowNav(0);
      setNavShadow("none");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <Box w="full" bgColor="gray.50">
        <Box w="full" maxW="1800px" px={{ base: "10px", md: "15px" }} mx="auto">
          <Flex
            justify="space-between"
            flex={10}
            gap={{ base: 10, md: 0 }}
            p={2}
          >
            <Link href="/">
              <Image
                src="/jordan.svg"
                width={20}
                height={20}
                alt="Jordan Logo"
              />
            </Link>
            <Flex
              gap={{ base: 2, md: 5 }}
              textAlign={{ base: "center", md: "left" }}
              justify="center"
              wrap="wrap"
              transition="all"
              transitionDuration={100}
            >
              <Box
                fontSize={12}
                color="blackAlpha.800"
                _hover={{ color: "gray.500" }}
                cursor="pointer"
              >
                Find Store
              </Box>
              <Box fontSize={12} color="blackAlpha.800">
                |
              </Box>
              <Box
                fontSize={12}
                color="blackAlpha.800"
                _hover={{ color: "gray.500" }}
                cursor="pointer"
              >
                Help
              </Box>
              <Box fontSize={12} color="blackAlpha.800">
                |
              </Box>
              <Box
                fontSize={12}
                color="blackAlpha.800"
                _hover={{ color: "gray.500" }}
                cursor="pointer"
              >
                Join Us
              </Box>
              <Box fontSize={12} color="blackAlpha.800">
                |
              </Box>
              <Box
                fontSize={12}
                color="blackAlpha.800"
                _hover={{ color: "gray.500" }}
                cursor="pointer"
              >
                Sign In
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        position="sticky"
        bg="white"
        color="gray.800"
        w="full"
        h={{ base: "60px", md: "80px" }}
        zIndex={30}
        top={0}
        transition="transform .3s ease-out"
        transform={`translateY(${showNav})`}
        shadow={navShadow}
      >
        <Wrapper>
          <Flex flex alignItems="center" justify="space-between">
            <Link href="/">
              <Image src="/logo.svg" width={40} height={40} alt="Nike Logo" />
            </Link>
            <MainMenu
              showSubMenu={showSubMenu}
              setShowSubMenu={setShowSubMenu}
              mobileMenu={mobileMenu}
              setMobileMenu={setMobileMenu}
            />
            {mobileMenu && (
              <MobileMenu
                showSubMenu={showSubMenu}
                setShowSubMenu={setShowSubMenu}
                setMobileMenu={setMobileMenu}
              />
            )}
          </Flex>
        </Wrapper>
      </Flex>
    </>
  );
};

export default Navbar;
