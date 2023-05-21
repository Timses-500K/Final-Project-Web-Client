import "@/styles/globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
// import { Provider } from "react-redux";
// import store from "@/store/store";
import { StoreProvider } from "@/helper/store";
import { AuthProvider } from "@/helper/auth";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <StoreProvider>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </StoreProvider>
    </AuthProvider>
  );
}
