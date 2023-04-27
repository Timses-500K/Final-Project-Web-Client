import { Box, Flex } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Box bg="black" color="white" pt={14} pb={3}>
      <Wrapper>
        <Flex
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 50, md: 0 }}
        >
          <Flex
            gap={{ base: 50, md: 75, lg: 100 }}
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex flexDir="column" gap={3} shrink={0}>
              <Box
                fontWeight="medium"
                fontSize="sm"
                textTransform="uppercase"
                cursor="pointer"
              >
                find a store
              </Box>
              <Box
                fontWeight="medium"
                fontSize="sm"
                textTransform="uppercase"
                cursor="pointer"
              >
                become a partner
              </Box>
              <Box
                fontWeight="medium"
                fontSize="sm"
                textTransform="uppercase"
                cursor="pointer"
              >
                sign up for email
              </Box>
              <Box
                fontWeight="medium"
                fontSize="sm"
                textTransform="uppercase"
                cursor="pointer"
              >
                send us feedback
              </Box>
              <Box
                fontWeight="medium"
                fontSize="sm"
                textTransform="uppercase"
                cursor="pointer"
              >
                student discounts
              </Box>
              <Box fontWeight="medium" fontSize="sm" cursor="pointer">
                Send Us Feedback
              </Box>
            </Flex>
            <Flex gap={{ base: 50, md: 75, lg: 100 }} shrink={0}>
              <Flex flexDir="column" gap={3}>
                <Box
                  fontWeight="medium"
                  fontSize="sm"
                  textTransform="uppercase"
                  cursor="pointer"
                >
                  get help
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Order Status
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Delivery
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Returns
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Payment Options
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Contact Us
                </Box>
              </Flex>
              <Flex flexDir="column" gap={3}>
                <Box
                  fontWeight="medium"
                  fontSize="sm"
                  textTransform="uppercase"
                  cursor="pointer"
                >
                  about nike
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  News
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Careers
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Investors
                </Box>
                <Box
                  fontSize="sm"
                  color="whiteAlpha.600"
                  _hover={{ color: "white" }}
                  cursor="pointer"
                >
                  Sustainability
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={4} justify={{ base: "center", md: "start" }}>
            <Flex
              alignItems="center"
              justify="center"
              w={10}
              h={10}
              rounded="full"
              bg="whiteAlpha.500"
              fontSize={20}
              color="black"
              _hover={{ bg: "white" }}
              cursor="pointer"
              onClick={() => window.open("https://facebook.com/nike", "_blank")}
            >
              <FaTwitter />
            </Flex>
            <Flex
              alignItems="center"
              justify="center"
              w={10}
              h={10}
              rounded="full"
              bg="whiteAlpha.500"
              fontSize={20}
              color="black"
              _hover={{ bg: "white" }}
              cursor="pointer"
              onClick={() => window.open("https://facebook.com/nike", "_blank")}
            >
              <FaFacebookF />
            </Flex>
            <Flex
              alignItems="center"
              justify="center"
              w={10}
              h={10}
              rounded="full"
              bg="whiteAlpha.500"
              fontSize={20}
              color="black"
              _hover={{ bg: "white" }}
              cursor="pointer"
              onClick={() => window.open("https://facebook.com/nike", "_blank")}
            >
              <FaYoutube />
            </Flex>
            <Flex
              alignItems="center"
              justify="center"
              w={10}
              h={10}
              rounded="full"
              bg="whiteAlpha.500"
              fontSize={20}
              color="black"
              _hover={{ bg: "white" }}
              cursor="pointer"
              onClick={() => window.open("https://facebook.com/nike", "_blank")}
            >
              <FaInstagram />
            </Flex>
          </Flex>
        </Flex>
      </Wrapper>
      <Wrapper>
        <Flex
          justify="space-between"
          mt={10}
          flex={10}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: 10, md: 0 }}
        >
          <Box
            fontSize={12}
            color="whiteAlpha.600"
            _hover={{ color: "white" }}
            cursor="pointer"
            textAlign={{ base: "center", md: "left" }}
          >
            © 2023 Nike, Inc. All Rights Reserved
          </Box>
          <Flex
            gap={{ base: 2, md: 5 }}
            textAlign={{ base: "center", md: "left" }}
            justify="center"
            wrap="wrap"
          >
            <Box
              fontSize={12}
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              cursor="pointer"
            >
              Guides
            </Box>
            <Box
              fontSize={12}
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              cursor="pointer"
            >
              Terms of Sale
            </Box>
            <Box
              fontSize={12}
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              cursor="pointer"
            >
              Terms of Use
            </Box>
            <Box
              fontSize={12}
              color="whiteAlpha.600"
              _hover={{ color: "white" }}
              cursor="pointer"
            >
              Privacy Policy
            </Box>
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Footer;
