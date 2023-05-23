import "@/styles/globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
// import { Provider } from "react-redux";
// import store from "@/store/store";
import { StoreProvider } from "@/helper/store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </StoreProvider>
    </SessionProvider>
  );
}
