import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      position="relative"
      color="white"
      fontSize={20}
      w="full"
      maxW={1800}
      mx="auto"
      px={{ base: "10px", md: "15px" }}
    >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <Flex
            position="absolute"
            right={{ base: 31, md: 51 }}
            bottom={0}
            w={{ base: "30px", md: "50px" }}
            h={{ base: "30px", md: "50px" }}
            bg="black"
            fontSize={{ base: "sm", md: "lg" }}
            zIndex={10}
            alignItems="center"
            justify="center"
            cursor="pointer"
            _hover={{ opacity: 90 }}
            onClick={clickHandler}
          >
            <VscArrowLeft />
          </Flex>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <Flex
            position="absolute"
            right={0}
            bottom={0}
            w={{ base: "30px", md: "50px" }}
            h={{ base: "30px", md: "50px" }}
            bg="black"
            fontSize={{ base: "sm", md: "lg" }}
            zIndex={10}
            alignItems="center"
            justify="center"
            cursor="pointer"
            _hover={{ opacity: 90 }}
            onClick={clickHandler}
          >
            <VscArrowRight />
          </Flex>
        )}
      >
        <Box>
          <Image
            src="/slide-1.png"
            width={1200}
            height={525}
            alt="slider image"
            style={{ objectFit: "cover", aspectRatio: "auto" }}
          />
          <Link href="/products">
            <Box
              px={{ base: "25px", md: "40px" }}
              py={{ base: "10px", md: "15px" }}
              bg="white"
              position="absolute"
              bottom={{ base: "25px", md: "75px" }}
              left={0}
              color="blackAlpha.900"
              fontSize={{ base: "15px", md: "30px" }}
              textTransform="uppercase"
              fontWeight="light"
              cursor="pointer"
              _hover={{ opacity: 90 }}
            >
              Shop Now
            </Box>
          </Link>
        </Box>
        <Box>
          <Image
            src="/slide-2.png"
            width={1200}
            height={525}
            alt="slider image"
            style={{ objectFit: "cover", aspectRatio: "auto" }}
          />
          <Link href="/products">
            <Box
              px={{ base: "25px", md: "40px" }}
              py={{ base: "10px", md: "15px" }}
              bg="white"
              position="absolute"
              bottom={{ base: "25px", md: "75px" }}
              left={0}
              color="blackAlpha.900"
              fontSize={{ base: "15px", md: "30px" }}
              textTransform="uppercase"
              fontWeight="light"
              cursor="pointer"
              _hover={{ opacity: 90 }}
            >
              Shop Now
            </Box>
          </Link>
        </Box>
        <Box>
          <Image
            src="/slide-3.png"
            width={1200}
            height={525}
            alt="slider image"
            style={{ objectFit: "cover", aspectRatio: "auto" }}
          />
          <Link href="/products">
            <Box
              px={{ base: "25px", md: "40px" }}
              py={{ base: "10px", md: "15px" }}
              bg="white"
              position="absolute"
              bottom={{ base: "25px", md: "75px" }}
              left={0}
              color="blackAlpha.900"
              fontSize={{ base: "15px", md: "30px" }}
              textTransform="uppercase"
              fontWeight="light"
              cursor="pointer"
              _hover={{ opacity: 90 }}
            >
              Shop Now
            </Box>
          </Link>
        </Box>
        <Box>
          <Image
            src="/slide-4.png"
            width={1200}
            height={525}
            alt="slider image"
            style={{ objectFit: "cover", aspectRatio: "auto" }}
          />
          <Link href="/products">
            <Box
              px={{ base: "25px", md: "40px" }}
              py={{ base: "10px", md: "15px" }}
              bg="white"
              position="absolute"
              bottom={{ base: "25px", md: "75px" }}
              left={0}
              color="blackAlpha.900"
              fontSize={{ base: "15px", md: "30px" }}
              textTransform="uppercase"
              fontWeight="light"
              cursor="pointer"
              _hover={{ opacity: 90 }}
            >
              Shop Now
            </Box>
          </Link>
        </Box>
        <Box>
          <Image
            src="/slide-5.png"
            width={1200}
            height={525}
            alt="slider image"
            style={{ objectFit: "cover", aspectRatio: "auto" }}
          />
          <Link href="/products">
            <Box
              px={{ base: "25px", md: "40px" }}
              py={{ base: "10px", md: "15px" }}
              bg="white"
              position="absolute"
              bottom={{ base: "25px", md: "75px" }}
              left={0}
              color="blackAlpha.900"
              fontSize={{ base: "15px", md: "30px" }}
              textTransform="uppercase"
              fontWeight="light"
              cursor="pointer"
              _hover={{ opacity: 90 }}
            >
              Shop Now
            </Box>
          </Link>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Hero;
