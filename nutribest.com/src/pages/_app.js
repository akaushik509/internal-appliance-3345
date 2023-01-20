// import Carousel from 'Components/Carousel/Carousel';
import { useRouter } from "next/router";
import Navbar from "../../Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from '../redux/store';
// import '@/styles/globals.css'


export default function App({ Component, pageProps }) {

  const router = useRouter();
  const showHeader = router.pathname === "/admin" ? false : true;
  const showHeader2 = router.pathname === "/cart" ? false : true;
  const showHeader3 = router.pathname === "/address" ? false : true;
  const showHeader4 = router.pathname === "/payment" ? false : true;
  console.log(showHeader)
  return (
    <Provider store={store}>
    <ChakraProvider>
       {showHeader && showHeader2 && showHeader3 && showHeader4 && <Navbar />}
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
  );


}
