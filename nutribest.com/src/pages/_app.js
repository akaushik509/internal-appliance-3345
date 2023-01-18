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
  return (
    <Provider store={store}>
  <ChakraProvider>
      {showHeader && <Navbar />}
      <Component {...pageProps} />
  </ChakraProvider>
  </Provider>
  );


}
