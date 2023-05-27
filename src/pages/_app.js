import "@/styles/globals.css";

import Navbar from "@/components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer/Footer";
// import { Provider } from "react-redux";
// import store from "@/store/store";
import { StoreProvider } from "@/helper/store";
import { AuthProvider } from "@/modules/context/authCotext";
// import { SessionProvider, useSession } from "next-auth/react";
// import Loading from "@/components/Loading/Loading";
// import { useRouter } from "next/router";

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
export default function App({ Component, pageProps }) {
  return (
    // <SessionProvider
    //   session={session}
    //   options={{
    //     MaxAge: 60, // Re-fetch session if cache is older than 60 seconds
    //   }}
    // >
    <AuthProvider>
      <StoreProvider>
        <ChakraProvider>
          <Navbar />
          {/* {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : ( */}
          <Component {...pageProps} />
          {/* )} */}
          <Footer />
        </ChakraProvider>
      </StoreProvider>
    </AuthProvider>
    // </SessionProvider>
  );
}

// function Auth({ children }) {
//   const router = useRouter();
//   const { status } = useSession({
//     required: true,
//     onUnauthenticated() {
//       router.push("/login");
//     },
//   });

//   if (status === "loading") {
//     return <Loading />;
//   }

//   return children;
// }
