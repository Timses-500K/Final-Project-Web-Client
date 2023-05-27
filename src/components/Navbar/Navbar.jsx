import { Box, Flex } from "@chakra-ui/react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";
import MainMenu from "./MainMenu";
import { useContext, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
// import { signOut, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { Store } from "@/helper/store";
import { useAuth } from "@/modules/context/authCotext";
import { useRouter } from "next/router";

const Navbar = () => {
  // const { data: session } = useSession();
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNav, setShowNav] = useState(0);
  const [navShadow, setNavShadow] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { state, dispatch } = useContext(Store);

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

  const { isLoggedIn, setIsLoggedIn } = useAuth();

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
              {isLoggedIn ? (
                <Flex
                  fontSize={12}
                  color="blackAlpha.800"
                  _hover={{ color: "gray.500" }}
                  cursor="pointer"
                  onMouseEnter={() => setShowUserMenu(true)}
                  onMouseLeave={() => setShowUserMenu(false)}
                  position="relative"
                >
                  Hi, user
                  {showUserMenu && (
                    <Flex
                      flexDirection="column"
                      bg="white"
                      position="absolute"
                      left={0}
                      top={4}
                      minWidth="full"
                      color="black"
                      shadow="lg"
                      zIndex={31}
                    >
                      <Link href="/profile">
                        <Box
                          fontSize="sm"
                          color="gray.500"
                          p={2}
                          _hover={{ bg: "blackAlpha.50" }}
                        >
                          Profile
                        </Box>
                      </Link>
                      <Link href="/transactions">
                        <Box
                          fontSize="sm"
                          color="gray.500"
                          p={2}
                          _hover={{ bg: "blackAlpha.50" }}
                        >
                          Transactions
                        </Box>
                      </Link>
                      <Box
                        fontSize="sm"
                        color="gray.500"
                        cursor="pointer"
                        p={2}
                        _hover={{ bg: "blackAlpha.50" }}
                        onClick={() => {
                          Cookies.remove("isLoggedIn");
                          Cookies.remove("cart");
                          dispatch({ type: "CART_RESET" });
                          setIsLoggedIn(false);
                          router.push("/");
                        }}
                        // onClick={() => {
                        //   Cookies.remove("cart");

                        //   dispatch({ type: "CART_RESET" });
                        //   // signOut({ callbackUrl: "/login" });
                        // }}
                      >
                        Logout
                      </Box>
                    </Flex>
                  )}
                </Flex>
              ) : (
                <>
                  <Link href="/register">
                    <Box
                      fontSize={12}
                      color="blackAlpha.800"
                      _hover={{ color: "gray.500" }}
                      cursor="pointer"
                    >
                      Join Us
                    </Box>
                  </Link>
                  <Box fontSize={12} color="blackAlpha.800">
                    |
                  </Box>
                  <Link href="/login">
                    <Box
                      fontSize={12}
                      color="blackAlpha.800"
                      _hover={{ color: "gray.500" }}
                      cursor="pointer"
                    >
                      Sign In
                    </Box>
                  </Link>
                </>
              )}
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
