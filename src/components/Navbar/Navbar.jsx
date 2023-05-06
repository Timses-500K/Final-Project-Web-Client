import { Flex } from "@chakra-ui/react";
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
  );
};

export default Navbar;
