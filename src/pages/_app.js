import "@/styles/globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
