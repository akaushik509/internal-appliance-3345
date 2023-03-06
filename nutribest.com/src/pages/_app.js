import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../src/Components/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import { theme } from "@/theme";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === "/admin" ? false : true;
  return (
    <ChakraProvider>
      <Provider store={store}>
        {showHeader && <Navbar />}
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
