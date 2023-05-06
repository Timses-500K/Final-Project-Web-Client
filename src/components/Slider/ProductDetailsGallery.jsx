import { Box } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsGallery = () => {
  return (
    <Box
      color="white"
      fontSize={20}
      w="full"
      maxW={1360}
      mx="auto"
      position="sticky"
      top={50}
    >
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" />
        <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        {/* <Image src="/p1.png" width={800} height={800} />
        <Image src="/p2.png" width={800} height={800} />
        <Image src="/p3.png" width={800} height={800} />
        <Image src="/p4.png" width={800} height={800} /> */}
      </Carousel>
    </Box>
  );
};

export default ProductDetailsGallery;
